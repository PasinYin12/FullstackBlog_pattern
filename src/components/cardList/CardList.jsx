// cardList.jsx
import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

const getData = async (page, cat) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(
    `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API error:", response.status, errorText); 
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Articles</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} id={item.id} key={item.id} />
        ))}

        <div className={styles.post}>
          <div className={styles.imgContainer}></div>
          <div className={styles.textContainer}></div>
        </div>
        <div className={styles.post}></div>
        <div className={styles.post}></div>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList;
