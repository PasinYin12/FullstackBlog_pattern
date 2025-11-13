"use client";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.bubble.css";

const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);
  const [quillRef, setQuillRef] = useState(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);


  useEffect(() => {
    if (!quillRef) return;

    const handleImageClick = (e) => {
      const img = e.target;
      if (img.tagName === "IMG") {
        document.querySelectorAll(".image-delete-btn").forEach((btn) => btn.remove());

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "image-delete-btn";
        deleteBtn.innerHTML = "×";
        deleteBtn.type = "button";
        deleteBtn.style.position = "absolute";
        deleteBtn.style.zIndex = "10";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.background = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius = "50%";
        deleteBtn.style.width = "24px";
        deleteBtn.style.height = "24px";
        deleteBtn.style.fontSize = "16px";

        deleteBtn.onclick = (e) => {
          e.preventDefault();
          img.remove();
          deleteBtn.remove();
        };

        const updatePosition = () => {
          deleteBtn.style.top = `${img.offsetTop - 10}px`;
          deleteBtn.style.left = `${img.offsetLeft + img.offsetWidth - 20}px`;
        };

        updatePosition();
        const parent = img.parentElement;
        if (parent) {
          parent.style.position = "relative";
          parent.appendChild(deleteBtn);
        }

        const onResize = () => updatePosition();
        window.addEventListener("resize", onResize);

        // Clean up when button is removed
        const observer = new MutationObserver(() => {
          if (!deleteBtn.isConnected) {
            window.removeEventListener("resize", onResize);
            observer.disconnect();
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    };

    const editor = quillRef.root;
    editor.addEventListener("click", handleImageClick);

    return () => {
      editor.removeEventListener("click", handleImageClick);
      document.querySelectorAll(".image-delete-btn").forEach((btn) => btn.remove());
    };
  }, [quillRef]);

  // Upload file and insert into editor at cursor position
  useEffect(() => {
    if (!file) return;

    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);

            if (quillRef) {
              const range = quillRef.getSelection();
              const position = range ? range.index : 0;

              if (file.type.startsWith("image/")) {
                quillRef.insertEmbed(position, "image", downloadURL);
              } else if (file.type.startsWith("video/")) {
                quillRef.insertEmbed(position, "video", downloadURL);
              }

              quillRef.setSelection(position + 1);
            }

            setFile(null);
            setOpen(false);
          });
        }
      );
    };

    upload();
  }, [file, quillRef]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Slugify helper
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }
    if (!catSlug) {
      alert("Please select a category");
      return;
    }
    if (!value.trim()) {
      alert("Please write some content");
      return;
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/posts/${data.slug}`);
      } else {
        alert("Failed to publish post");
      }
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("Something went wrong!");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className={styles.categoryContainer}>
        <label className={styles.categoryLabel}>Select Category:</label>
        <div className={styles.categoryButtons}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryButton} ${styles[cat.slug]} ${
                catSlug === cat.slug ? styles.categoryActive : ""
              }`}
              onClick={() => setCatSlug(cat.slug)}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/addButton.png" alt="add-button" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="media"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ display: "none" }}
            />

            <button className={styles.addButton} type="button">
              <label htmlFor="media" style={{ cursor: "pointer", display: "flex" }}>
                <Image src="/add-img.png" alt="add-img" width={16} height={16} />
              </label>
            </button>

            <button className={styles.addButton} type="button">
              <label htmlFor="media" style={{ cursor: "pointer", display: "flex" }}>
                <Image src="/video.png" alt="add-video" width={16} height={16} />
              </label>
            </button>
          </div>
        )}

        
        <ReactQuill
          ref={(el) => {
            if (el) setQuillRef(el.getEditor());
          }}
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          modules={modules}
        />
      </div>

      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;