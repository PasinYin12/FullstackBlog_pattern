import styles from "./card.module.css"
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
         
           <div className={styles.imgContainer}>
             <img src="/p1.jpeg" alt="" style={{ width: 400, height: 275 }} className={styles.img}/>
           </div>
           <div className={styles.textContainer}>
             <div className={styles.detail}>
             <span className={styles.date}>1st November 2025 - </span>
             <span className={styles.category}>Travel</span>
             </div>
         
           <Link href="/">
            <h1 className={styles.title}>Visit Vernazza in La Spezia</h1>
            </Link>
            <p className={styles.desc}>Discover the stunning landscapes, 
                rich history, and vibrant culture of Vernazza, a picturesque 
                village in the Cinque Terre region and Try Sciacchetrà, 
                a rare sweet wine made from sun-dried grapes grown on the cliffs.</p>
           <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
        
    
  )
}

export default Card;
