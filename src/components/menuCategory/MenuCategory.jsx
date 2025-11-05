import styles from './menuCategory.module.css'
import Link from 'next/link'

 const MenuCategory = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
          Style
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          Culture
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          Food
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          Travel
        </Link>
      </div>
  )
}

export default MenuCategory
