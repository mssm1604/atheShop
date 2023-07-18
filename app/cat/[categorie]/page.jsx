import styles from "./men.module.css"
import { CatArticles } from "@/components/cat/categorie/CatArticles"
import { CategorieHeader } from "@/components/cat/categorie/CategorieHeader"
import { Header } from "@/components/header/Header"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

async function MenCat({ params }) {
  // const session = await getServerSession(authOptions)
  // console.log('f----------- ', JSON.stringify(authOptions))
  console.log("f----------- ", authOptions)

  const { categorie } = params

  // if (productClass == "women") return

  const mensSection = [
    {
      title: "ready to wear",
      urlImg: "ropaPic.jpg",
      articleType: "span2",
    },
    { title: "shoes", urlImg: `${categorie}/shoes.jpg` },
    { title: "bags", urlImg: "bagsMens.jpg" },
    { title: "eyewear", urlImg: "accesoriesMens.jpg" },
    { title: "belts", urlImg: "beltsMens.jpg" },
  ]

  return (
    <>
      <Header headType={"mainView"} />

      <CategorieHeader
        urlImage={`../public/${categorie}Pic.jpg`}
        catTitle={categorie}
      />

      <main className={styles.main}>
        <section className={`${styles.categoriesSection}`}>
          {mensSection.map((product) => (
            <CatArticles
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

export default MenCat
