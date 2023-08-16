import styles from "./categorieHeader.module.css"
import Image from "next/image"

function CategorieHeader({ categorieTitle }) {

  return (
    <section className={styles.header}>
      <Image
        src={`/${categorieTitle}/mainPicture.jpg`}
        alt={`Imagen principal de la sección de ${categorieTitle}.`}
        priority
        fill
        className={styles.picHead}
      />
      <h1>{categorieTitle}</h1>
    </section>
  )
}

export { CategorieHeader }
