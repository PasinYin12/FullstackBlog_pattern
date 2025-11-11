import styles from "./card.module.css"
import Link from "next/link";


const Card = ({ id, item }) => { 
  return (
    <div className={styles.container}>
       {item.img && (
      <div className={styles.imgContainer} key={id}> 
       <img 
          src={item.img}
          alt="" 
          style={{ width: 400, height: 275 }} 
          className={styles.img}
        />
      </div>
        )}

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
         
        <Link href={`/posts/${item.slug}`} >
          <h1 className={styles.title}>{item.title}</h1>
        </Link>

        <p className={styles.desc}>
          {item.desc.substring(0, 60)}
        </p>

        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card;
