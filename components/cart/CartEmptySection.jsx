import Link from "next/link"
import styles from "./cartSummary.module.css"
import { CartEmpty } from "../icons/Icons"

export function CartEmptySection() {
  return (
    <section className={styles.cartEmptySection}>
      <div className={styles.titleWrapper}>
        <h1>carrito de compras vacío</h1>
      </div>
      <div className={styles.emptyIcoWrapper}>
        <CartEmpty />
      </div>

      <div className={styles.suggestionsWrapper}>
        <h3 className={styles.suggestionsTitle}>Sugerencias para ti:</h3>
        <ul className={styles.suggestionsList}>
          <li>
            <Link href={"#"}>Nueva colecction de hombres</Link>
          </li>
          <li>
            <Link href={"#"}>Vestidos para mujeres</Link>
          </li>
          <li>
            <Link href={"#"}>Moda para niños</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
