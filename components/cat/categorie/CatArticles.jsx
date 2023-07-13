import Image from "next/image"
import styles from "./catArticles.module.css"
import Link from "next/link"

export function CatArticles({ productData, categorieName }) {
  const { title, urlImg, articleType } = productData
  return (
    <article
      className={`${styles.article} ${articleType == "span2" && styles.span2} `}
    >
      <div className={styles.artTitleWrapper}>
        <Link href={`/cat/${categorieName}/${title}`}>
          <h3 id={title} className={styles.artTitle}>
            {title}

            {articleType == "span2" && (
              <span className={styles.subTitle}>Hombres</span>
            )}
          </h3>
        </Link>
      </div>

      <div className={styles.imgWrapper}>
        <Link href={`/cat/${categorieName}/${title}`}>
          <Image
            name={title}
            src={`/../public/${urlImg}`}
            alt={`mens ${title} pic`}
            className={`${styles.image}`}
            fill
          />
        </Link>
      </div>
    </article>
  )
}
