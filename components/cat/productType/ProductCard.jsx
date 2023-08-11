import styles from "./productType.module.css"
import Image from "next/image"
import Link from "next/link"

function ProductCard({ product, imageOnHover, productTypeList }) {
  const { id, prodName, price } = product
  return (
    <article className={styles.articleProduct}>
      <Link href={`${productTypeList}/${id}`}>
        <div className={styles.imgWrapper}>
          <picture>
            <Image
              src={`/../public/mujer/ropa/saco.jpg`}
              alt={prodName}
              fill
              className={styles.productImage}
            />
          </picture>

          <picture>
            <Image
              src={`/../public/mujer/ropa/${imageOnHover}`}
              alt={imageOnHover}
              fill
              className={styles.productImageOnHover}
            />
          </picture>
        </div>

        <footer className={styles.productFooter}>
          <div>
            <h4>{prodName}</h4>
          </div>
          <div>
            <p>
              $ <span>{price}</span>
            </p>
          </div>
        </footer>
      </Link>
    </article>
  )
}

export { ProductCard }
