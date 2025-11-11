import CardList from "@/components/cardList/CardList"
import styles from "./blogPage.module.css"
import Menu from "@/components/Menu/Menu"

export default async function BlogPage({ searchParams }) {
  const { page: pageParam, cat } = await searchParams;   
  const page = parseInt(pageParam, 10) || 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}
