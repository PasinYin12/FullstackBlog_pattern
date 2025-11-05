import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';


 const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Articles</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        
           <div className={styles.post}>
           <div className={styles.imgContainer}></div>
           <div className={styles.textContainer}></div>
           </div>
         <div className={styles.post}></div>
         <div className={styles.post}></div>
      </div>
    <Pagination/>
    </div>
  )
}
export default CardList;