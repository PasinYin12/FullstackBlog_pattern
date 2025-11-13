import Image from "next/image"
import styles from "./singlePage.module.css" 
import Comments from "@/components/comments/Comments"

const getData = async (slug) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/posts/${slug}`, { cache: 'no-store' });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API error:", response.status, errorText);
    throw new Error("Failed to fetch post");
  }

  return response.json();
};

const extractFirstImage = (htmlContent) => {
  if (!htmlContent) return { imageSrc: null, remainingContent: htmlContent };
  
  const imgRegex = /<img[^>]*\ssrc=["']([^"']+)["'][^>]*>/i;
  const match = htmlContent.match(imgRegex);
  
  if (match) {
    const imageSrc = match[1]; 
    const fullImgTag = match[0]; 
    
    
    let remainingContent = htmlContent.replace(fullImgTag, '');
    
    
    remainingContent = remainingContent.replace(/<p>\s*<\/p>/g, '').trim();
    
    return {
      imageSrc,
      remainingContent
    };
  }
  
  return { imageSrc: null, remainingContent: htmlContent };
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;
  const data = await getData(slug);

  
  const { imageSrc, remainingContent } = extractFirstImage(data?.desc);
  
  
  const mainImage = imageSrc || data?.img;
  const contentToDisplay = imageSrc ? remainingContent : data?.desc;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{data?.title}</h1> 
        
        <div className={styles.user}>
          {data?.user?.image && (
            <div className={styles.userImgContainer}>
              <Image 
                src={data.user.image} 
                alt={data.user.name || "User"} 
                fill 
                className={styles.avatar} 
              />
            </div>
          )}
          <div className={styles.userTextContainer}>
            <span className={styles.username}>{data?.user?.name}</span>
            <span className={styles.date}>
              {data?.createdAt && new Date(data.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Main Image Section - First Image as Thumbnail */}
      {mainImage && (
        <div className={styles.mainImageContainer}>
          <Image 
            src={mainImage} 
            alt={data?.title || "Post image"} 
            width={1200}
            height={675}
            className={styles.mainImage}
            priority
          />
        </div>
      )}

      {/* Content Section - 2nd, 3rd, 4th+ images display here */}
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: contentToDisplay }}
          ></div>

          <div className={styles.comments}>
            <Comments postSlug={slug} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SinglePage;