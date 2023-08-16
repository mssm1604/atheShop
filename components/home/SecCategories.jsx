import styles from "./secCategories.module.css"
import { Categorie } from "./Categorie"

function SecCategories() {
  const articleCategoriesList = ["ropa", "zapatos", "bolsos", "cinturones"]

  return (
    <main className={styles.catWrapper}>
      <div className={styles.servicesMessage}>
        <ul>
          <li>ENTREGAS SIN COSTO</li>
          <li>DEVOLUCIONES GRATUITAS</li>
          <li>CONTENIDO EXCLUSIVO</li>
        </ul>
      </div>

      <section className={styles.contCategories}>
        <Categorie
          urlLink="mujer/mujerMainPicture.jpg"
          title="mujer"
          articleCategoriesList={articleCategoriesList}
        />

        <Categorie
          urlLink="hombre/hombreMainPicture.jpg"
          title="hombre"
          articleCategoriesList={articleCategoriesList}
        />

        <Categorie
          urlLink="deportes/deportesMainPicture.jpg"
          title="deportes"
          articleCategoriesList={articleCategoriesList}
        />
      </section>
    </main>
  )
}

export { SecCategories }
