import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: 'no-store',
  });

  if(!response.ok){
    throw new Error("Failed")
  }

  return response.json()
};


const CategoryList = async() => {

  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CategoryList</h1>
      <div className={styles.categories}>
        {data.map((item) => (
        <Link href={`/blog?cat=${item.slug}`}
        className={`${styles.category} ${styles[item.slug]}`}
        key={item.id}
        >
          {item.img && (
          <Image src={item.img} 
          alt="" 
          width={40} height={40} 
          className={styles.image} />
          )}
          {item.title}
        </Link>
       
       ))}
      </div>
    </div>
  )
}
export default CategoryList;