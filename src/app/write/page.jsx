"use client";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

// Import CSS inside the dynamic import or in a client-only context
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.bubble.css";



const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
     <input type="text" placeholder="Title" className={styles.input}/>
       <div className={styles.editor}>
        <button className={styles.button} onClick={() =>setOpen(!open)}>
          <Image src="/addButton.png" alt="add-button" width={16} height={16}/>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/add-img.png" alt="add-img" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/add-ext.png" alt="add-file" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="add-video" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} 
        onChange={setValue} placeholder="Tell your story..."/>
       </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage