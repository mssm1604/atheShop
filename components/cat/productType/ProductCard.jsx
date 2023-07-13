import styles from "./productType.module.css"
import Image from "next/image"
import { HeartIcon } from "@/components/icons/Icons"
import Link from "next/link"

function ProductCard({ product, imageOnHover, productTypeList }) {
  return (
    <article className={styles.articleProduct}>
      <Link href={`${productTypeList}/${product.prID}`}>
        <div className={styles.actionIcons}>
          <HeartIcon className={styles.heartIcon} />
        </div>

        <div className={styles.imgWrapper}>
          <picture>
            <Image
              src={`/../public/camisaRoja-sinFondo.jpg`}
              alt={product.brand}
              fill
              className={styles.productImage}
            />
          </picture>

          <picture>
            <Image
              src={`/../public/${imageOnHover}`}
              alt={imageOnHover}
              fill
              className={styles.productImageOnHover}
            />
          </picture>
        </div>

        <div className={styles.productFooter}>
          <div>
            <h4>{product.brand}</h4>
          </div>
          <div>
            <p>
              $ <span>{product.price}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export { ProductCard }
