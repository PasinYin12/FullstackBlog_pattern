// page.jsx
import Menu from "@/components/Menu/Menu"
import Image from "next/image"
import styles from "./singlePage.module.css"
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>This page will be finished soon, stay tuned!</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image src="/dollar.png" alt="User image" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>D. O. Dollar</span>
              <span className={styles.date}>06.06.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="Main image" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
          <h1>Visit PQC</h1>
          <p>Phu Quoc is Vietnam’s largest island, often called the “Pearl Island,” 
            known for its pristine beaches, lush tropical forests, and vibrant local culture. 
            Located in the Gulf of Thailand just 15 km from Cambodia’s coast, the island spans 
            about 575 km² and boasts over 150 km of coastline with white-sand beaches like 
            Bai Sao and Long Beach. Beyond its natural beauty, Phu Quoc offers a mix of experiences: 
            luxury resorts and spas, bustling night markets, traditional fishing villages, and 
            attractions like the Hon Thom cable car—the world’s longest over-sea cable car 
            ride. With its blend of relaxation, adventure, and cultural heritage, Phu Quoc has 
            become one of Southeast Asia’s most sought-after island getaways.</p>
          <h2>A travel guide or culture snapshot</h2>
          <p>Travelers flock to Long Beach for sunsets, Sao Beach for powdery sand, and the
               bustling Duong Dong Night Market for fresh seafood and local specialties. Adventure 
               seekers can explore Phu Quoc National Park, a UNESCO Biosphere Reserve with dense 
               jungle trails and rare wildlife, or ride the record-breaking Hon Thom cable car 
               for sweeping ocean views. The island also has a rich cultural side, with traditional 
               fishing villages, pepper farms, and fish sauce factories that showcase its heritage.
               </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
