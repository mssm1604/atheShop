import Image from "next/image"
import styles from "./secCategories.module.css"

export function Categories({ urlLink, title, articleProductList }) {
  return (
    <article className={`${styles.contArticle} ${styles.articleMens}`}>
      <Image
        src={`/../public/${urlLink}`}
        alt={`men ${title} main picture`}
        fill={true}
        className={`${styles.artBg}`}
      />

      <div className={`${styles.contInfo} ${styles.contInfoLg}`}>
        <h3>
          {" "}
          <span></span>
          {title}
        </h3>

        <div className={`${styles.artCategories}`}>
          <ul className={styles.list}>
            {articleProductList.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
