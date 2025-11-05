import React from 'react'
import styles from './menu.module.css'
import MenuPost from '../menuPost/menuPost.jsx'
import MenuCategory from '../menuCategory/MenuCategory.jsx'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPost withImage={true} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategory />
      

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost.EditorPicks withImage={true} />


    </div>
  )
}
export default Menu;