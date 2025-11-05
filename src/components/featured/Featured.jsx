import React from 'react'
import styles from './featured.module.css'


 const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.greeting}>Hi, Reader!</b> Welcome to my creative blog with interesting content and ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src="/p1.jpeg" alt="Featured Post" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>A blend of medieval history, fishing traditions Visit Vernazza in La Spezia, Italy</h1>
          <p className={styles.postDesc}>
            Discover the stunning landscapes, rich history, and vibrant culture of Vernazza, a picturesque village in the Cinque Terre region and Try Sciacchetrà, a rare sweet wine made from sun-dried grapes grown on the cliffs. From its colorful cliffside houses to its charming harbor, Vernazza offers a perfect blend of relaxation and adventure for every traveler.
          </p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>

      </div>
    </div>
  )
}
export default Featured;