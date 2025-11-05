import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/dollar.png" alt="logo" width="50" height="50"/>
          <h1 className={styles.logotext}>myBlogApp</h1>
        </div>
        <p className={styles.desc}>Connecting people through stories.</p>
        <p className={styles.desc}>© 2025 myBlogApp. All rights reserved.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width="18" height="18"/>
          <Image src="/x.png" alt="x" width="18" height="18"/>
          <Image src="/instagram.png" alt="instagram" width="18" height="18"/>
          <Image src="/youtube.png" alt="youtube" width="18" height="18"/>
        </div>
      </div>
      
      <div className={styles.linksWrapper}>
        <div className={styles.list}>
          <h3 className={styles.listTitle}>Links</h3>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>

        <div className={styles.list}>
          <h3 className={styles.listTitle}>Tags</h3>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Food</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Culture</Link>
        </div>

        <div className={styles.list}>
          <h3 className={styles.listTitle}>Social</h3>
          <Link href="/">Facebook</Link>
          <Link href="/">X (Twitter)</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer