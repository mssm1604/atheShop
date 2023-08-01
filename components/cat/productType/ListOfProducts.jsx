import { ProductCard } from "./ProductCard"
import styles from "./productType.module.css"

function ListOfProducts({ products, loading, productTypeList }) {
  return (
    <section className={`${styles.listOfProducts}`}>
      {products ? (
        products?.map((item, index) => (
          <ProductCard
            key={index}
            product={item}
            productTypeList={productTypeList}
            imageOnHover={"sacoV3.jpg"}
          />
        ))
      ) : (
        <div className={styles.noResults}>
          <h2 className={styles.titleNoResults}>
            No hay resultados para su búsqueda
          </h2>
        </div>
      )}
    </section>
  )
}

export { ListOfProducts }
