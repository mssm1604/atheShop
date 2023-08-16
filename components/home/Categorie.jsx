import Image from "next/image"
import styles from "./secCategories.module.css"
import Link from "next/link"

export function Categorie({
  urlLink,
  title: categorie,
  articleCategoriesList,
}) {
  return (
    <article className={`${styles.contArticle} ${styles.articleMens}`}>
      <Link href={`/cat/${categorie}`}>
        <Image
          src={`/${urlLink}`}
          alt={`${categorie} main picture`}
          fill
          className={`${styles.artBg}`}
        />
      </Link>

      <div className={`${styles.contInfo} ${styles.contInfoLg}`}>
        <Link href={`/cat/${categorie}`}>
          <h3>{categorie}</h3>
        </Link>

        <div className={`${styles.artCategories}`}>
          <ul className={styles.list}>
            {articleCategoriesList.map((subCatName, index) => (
              <li key={index}>
                <Link href={`/cat/${categorie}/${subCatName}`}>
                  {subCatName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
