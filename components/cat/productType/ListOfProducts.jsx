import { ProductCard } from "./ProductCard"
import styles from "./productType.module.css"

function ListOfProducts({products, productTypeList}) {
  return (
    <section className={`${styles.listOfProducts}`}>
      {products.length > 0 ? (
          products?.map((item, index) => (
            <ProductCard key={index} product={item} productTypeList={productTypeList} imageOnHover={"nine.jpg"} />
          ))
        ) : (
          <div className={styles.noResults}>
            <h2>No hay resultados para su búsqueda</h2>
          </div>
        )}
    </section>
  )
}

export { ListOfProducts }
