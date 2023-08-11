import { ProductCard } from "./ProductCard"
import styles from "./productType.module.css"

function ListOfProducts({ products, productTypeList }) {
  return (
    <section className={`${styles.listOfProducts}`}>
      {products?.length > 0 ? (
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
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
