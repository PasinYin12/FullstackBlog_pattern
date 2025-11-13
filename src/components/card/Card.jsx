import styles from "./card.module.css"
import Link from "next/link";

// ✅ Function to strip HTML tags and get plain text
const stripHtmlTags = (html) => {
  if (!html) return "";
  
  // Remove HTML tags
  const plainText = html.replace(/<[^>]*>/g, "");
  
  // Decode HTML entities
  const textarea = document.createElement('textarea');
  textarea.innerHTML = plainText;
  
  return textarea.value;
};

// ✅ Alternative: Simple regex without DOM (works on server)
const stripHtmlTagsSimple = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "") // Remove all HTML tags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
};

const Card = ({ id, item }) => { 
  // ✅ Extract clean text from HTML description
  const cleanDescription = stripHtmlTagsSimple(item.desc);
  
  return (
    <div className={styles.container}>
       {item.img && (
      <div className={styles.imgContainer} key={id}> 
       <img 
          src={item.img}
          alt={item.title} 
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

        {/* ✅ Display clean text without HTML tags */}
        <p className={styles.desc}>
          {cleanDescription.substring(0, 60)}...
        </p>

        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card;