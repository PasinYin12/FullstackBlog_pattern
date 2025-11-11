"use client"
import { useSession } from "next-auth/react";
import styles from "./comments.module.css"
import Image from "next/image"
import useSWR from "swr";
import Link from "next/link"; 
import { useState } from "react";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`, 
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    
    if (!desc.trim()) {
      alert("Please write a comment");
      return;
    }

    try {
      
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desc, postSlug }),   
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to post comment");
      }

      setDesc("");
      
      mutate();
    } catch (error) {
      console.error("Error posting comment:", error);
      alert(error.message || "Failed to post comment");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea 
            placeholder="write a comment" 
            className={styles.input} 
            value={desc} 
            onChange={e => setDesc(e.target.value)}
          />
          <button 
            className={styles.button}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading 
          ? "loading"
          : data?.map((item) => (
            <div className={styles.comment} key={item.id}>
              <div className={styles.user}>
                {item?.user?.image && (
                  <Image 
                    src={item.user.image}
                    alt="" 
                    width={50} 
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className={styles.description}>
                {item.desc}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;