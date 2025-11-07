import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import styles from './menuPosts.module.css'

const MenuPost = ({ withImage, variant }) => {
    const renderPopularPosts = () => (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imgContainer}>
                    <Image src="/vinwonder.jpg" alt='' fill className={styles.image} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3 className={styles.itemTitle}>10 Tips to Travel on a Budget</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Primo Zero</span>
                        <span className={styles.date}> - Jan 1, 2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imgContainer}>
                    <Image src="/bunmi.jpg" alt='' fill className={styles.image} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                    <h3 className={styles.itemTitle}>10 Tips for Healthy Eating</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Segunda Rosa</span>
                        <span className={styles.date}> - Jan 6, 2024</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imgContainer}>
                    <Image src="/store.jpg" alt='' fill className={styles.image} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3 className={styles.itemTitle}>10 Tips to Explore Local Culture</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Trecera Parma</span>
                        <span className={styles.date}> - Dec 15, 2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imgContainer}>
                    <Image src="/tigerdoll.jpg" alt='' fill className={styles.image} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3 className={styles.itemTitle}>10 Tips to Dress on a Budget</h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Vivo del Quatro</span>
                        <span className={styles.date}> - Jan 1, 2025</span>
                    </div>
                </div>
            </Link>
        </div>
    )

    const renderEditorPicks = () => (
        <div className={styles.editorPicks}>
            <div className={styles.item}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/cablecar.jpg" alt='' fill className={styles.image} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.style}`}>Style</span>
                        <h3 className={styles.itemTitle}>The AI as an Artist. Future or Failure of Creativity?</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Samuel Athletic</span>
                            <span className={styles.date}> - April 25, 2025</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.item}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/cablecar.jpg" alt='' fill className={styles.image} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.style}`}>Style</span>
                        <h3 className={styles.itemTitle}>Vibe coding tips that replace all entire live coding?</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Samuel Athletic</span>
                            <span className={styles.date}> - April 25, 2025</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.item}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src="/cablecar.jpg" alt='' fill className={styles.image} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.style}`}>Style</span>
                        <h3 className={styles.itemTitle}>Everyone could be a programmer without knowing how to code in recent day.</h3>
                        <div className={styles.detail}>
                            <span className={styles.userName}>Samuel Athletic</span>
                            <span className={styles.date}> - April 25, 2025</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
    return variant === 'editorPicks' ? renderEditorPicks() : renderPopularPosts()
}
// Static properties for component variants
MenuPost.Popular = (props) => <MenuPost {...props} variant="popular" />
MenuPost.EditorPicks = (props) => <MenuPost {...props} variant="editorPicks" />

export default MenuPost