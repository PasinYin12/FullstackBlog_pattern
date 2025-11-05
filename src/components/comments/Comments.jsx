import styles from "./comments.module.css"
import Image from "next/image"



const Comments = () => {
  const status = "authenticated"

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (<Link href="/login">Login to write a comment</Link>)}
        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src="/dollar.png" 
              alt="" width={50} height={50} 
              className={styles.image}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>D. O. Dollar</span>
                <span className={styles.date}>06.06.2024</span>
              </div>
            </div>
            <p className={styles.description}>
                Hello! 
            </p>
          </div>
        </div>

        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src="/dollar.png" 
              alt="" width={50} height={50} 
              className={styles.image}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>D. O. Dollar</span>
                <span className={styles.date}>06.06.2024</span>
              </div>
            </div>
            <p className={styles.description}>
                Ride the Hon Thom cable car, the world’s longest over-sea cable car, for panoramic views.
            </p>
          </div>
        </div>

        <div className={styles.comments}>
          <div className={styles.comment}>
            <div className={styles.user}>
              <Image src="/dollar.png" 
              alt="" width={50} height={50} 
              className={styles.image}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>D. O. Dollar</span>
                <span className={styles.date}>06.06.2024</span>
              </div>
            </div>
            <p className={styles.description}>
                It’s just 15 km from Cambodia’s coast, but most visitors 
                arrive by ferry from Ha Tien or by direct flights from major Asian cities. 
            </p>
          </div>
        </div>
    </div>
  )
}

export default Comments