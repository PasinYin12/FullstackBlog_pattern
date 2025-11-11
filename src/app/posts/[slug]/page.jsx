import Menu from "@/components/Menu/Menu"
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

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImgContainer}>
                <Image src={data.user.image} alt="User image" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {new Date(data.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/sunsettown.jpg" alt="Main image" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          ></div>

          <div className={styles.comments}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage;