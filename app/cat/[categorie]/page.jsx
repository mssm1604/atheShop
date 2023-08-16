import styles from "./subCategories.module.css"
import { SubCatArticles } from "@/components/cat/categorie/SubCatArticles"
import { CategorieHeader } from "@/components/cat/categorie/CategorieHeader"
import { Header } from "@/components/header/Header"
import {
  menSubCatSections,
  sportsSubCatSections,
  womenSubCatSections,
} from "@/public/subCategoriesContent/subCategories"

function SubCategoriesSection({ params }) {
  const { categorie } = params

  let subCategories

  categorie === "mujer" && (subCategories = womenSubCatSections)
  categorie === "hombre" && (subCategories = menSubCatSections)
  categorie === "deportes" && (subCategories = sportsSubCatSections)

  return (
    <>
      <Header headType={"mainView"} />

      <CategorieHeader categorieTitle={categorie} />

      <main className={styles.main}>
        <section className={`${styles.categoriesSection}`}>
          {subCategories?.map((product) => (
            <SubCatArticles
              key={product.title}
              productData={product}
              categorieName={categorie}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default SubCategoriesSection
