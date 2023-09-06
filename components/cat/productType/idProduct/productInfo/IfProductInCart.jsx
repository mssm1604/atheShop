import { useAddProducts } from "@/hooks/useAddProducts"
import styles from "../productInfo.module.css"
import Link from "next/link"

export function IfProductInCartSection({ ifProductInCartId, quantity, size }) {
  const { cart, productInCartIndex } = useAddProducts({ ifProductInCartId })

  return (
    <div className={styles.ifProductCartWrapper}>
      <div className={styles.ifPrInfo}>
        <h2>producto en el carrito</h2>
        <div className={styles.ifPrQtSize}>
          <h3>
            cantidad:{" "}
            <span>{cart[productInCartIndex]?.quantity || quantity}</span>
          </h3>
          <h3>
            talla: <span>{cart[productInCartIndex]?.size || size}</span>
          </h3>
        </div>
      </div>

      <div className={`${styles.ifPrBtnWrapper} ${styles.buttonsWrapper}`}>
        <Link href={"/cart"} className={styles.btnPrInCart}>
          ver carrito
        </Link>
      </div>
    </div>
  )
}
