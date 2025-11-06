import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'


const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CategoryList</h1>
      <div className={styles.categories}>
        <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/tigerdoll.jpg" alt="" width={40} height={40} className={styles.image} />
          Style
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image src="/grandworld.jpg" alt="" width={40} height={40} className={styles.image} />
          Fashion
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image src="/store.jpg" alt="" width={40} height={40} className={styles.image} />
          Culture
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image src="/bunmi.jpg" alt="" width={40} height={40} className={styles.image} />
          Food
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image src="/vinwonder.jpg" alt="" width={40} height={40} className={styles.image} />
          Travel
        </Link>
       
      </div>
    </div>
  )
}
export default CategoryList;