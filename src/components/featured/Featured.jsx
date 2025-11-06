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
          <img src="/sunsettown.jpg" alt="Featured Post" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Pearl Island, Discovering the Soul of Phu Quoc, Vietnam’s Hidden Gem</h1>
          <p className={styles.postDesc}>
            Discover the stunning landscapes from peaceful mornings to golden evenings, explore the best spots to eat, 
            relax, and watch the day fade into the horizon. Sunset Town offers one of the best sunset views in Phu Quoc, 
            complete with sea-view restaurants, the Kiss Bridge viewpoint, and the Italian-inspired Sun Premier Village. 
            Whether you’re taking photos by the coastal arches or relaxing at a seaside café, this area perfectly captures 
            the island’s charm and style.
          </p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>

      </div>
    </div>
  )
}
export default Featured;