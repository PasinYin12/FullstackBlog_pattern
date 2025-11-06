import styles from "./card.module.css"
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
         
           <div className={styles.imgContainer}>
             <img src="/sunsetbalcony.jpg" alt="" style={{ width: 400, height: 275 }} className={styles.img}/>
           </div>
           <div className={styles.textContainer}>
             <div className={styles.detail}>
             <span className={styles.date}>1st November 2025 - </span>
             <span className={styles.category}>Travel</span>
             </div>
         
           <Link href="/">
            <h1 className={styles.title}>Pearl Island, Discovering the Soul of Phu Quoc, Vietnam’s Hidden Gem</h1>
            </Link>
            <p className={styles.desc}>Discover the stunning landscapes from peaceful mornings to 
              golden evenings, explore the best spots to eat, relax, and watch the day fade into the horizon. 
              Sunset Town offers one of the best sunset views in Phu Quoc...</p>
           <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
        
    
  )
}

export default Card;
