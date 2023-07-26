import Image from "next/image"
import styles from "./subCatArticles.module.css"
import Link from "next/link"

export function SubCatArticles({ productData, categorieName }) {
  const { title: subCatTitle, urlImg, articleType } = productData

  return (
    <article
      className={`${styles.article} ${articleType == "span2" && styles.span2} `}
    >
      <Link href={`/cat/${categorieName}/${subCatTitle}`}>
        <div className={styles.artTitleWrapper}>
          <h3 className={styles.artTitle}>
            {subCatTitle}

            {articleType == "span2" && (
              <span className={styles.subTitle}>{categorieName}</span>
            )}
          </h3>
        </div>

        <div className={styles.imgWrapper}>
          <Image
            name={subCatTitle}
            src={`/../public/${urlImg}`}
            alt={`Imagen de portada de la sección ${subCatTitle} de ${categorieName}`}
            className={`${styles.image}`}
            fill
          />
        </div>
      </Link>
    </article>
  )
}
