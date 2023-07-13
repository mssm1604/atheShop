import styles from "./secCategories.module.css"
import { Categories } from "./Categories"

function SecCategories() {
  const articleProductList = ["shoes", "t-Shirt", "Pants", "accesories"]

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
        <Categories
          urlLink="menPic.jpg"
          title="mujer"
          articleProductList={articleProductList}
        />

        <Categories
          urlLink="gucci2.jpg"
          title="hombre"
          articleProductList={articleProductList}
        />

        <Categories
          urlLink="mujer2.jpg"
          title="deportes"
          articleProductList={articleProductList}
        />

        <Categories
          urlLink="niños.jpg"
          title="niños"
          articleProductList={articleProductList}
        />
      </section>
    </main>
  )
}

export { SecCategories }
