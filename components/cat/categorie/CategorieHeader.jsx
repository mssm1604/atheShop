import styles from "./categorieHeader.module.css"
import Image from "next/image"

function CategorieHeader({ urlImage, catTitle }) {
  return (
    <section className={styles.header}>
      <Image
        src={`/../public/${urlImage}`}
        alt="mens main picture"
        priority
        fill
        className={styles.picHead}
      />
      <h1>{catTitle}</h1>
    </section>
  )
}

export { CategorieHeader }
