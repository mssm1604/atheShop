import Image from "next/image"
import { Edit2, HeartIcon, Trash } from "../icons/Icons"
import styles from "./itemsInCart.module.css"

export function ItemsInCart({ cart, deleteFromCart, setProductIdToEdit }) {
  return cart.map(({ id, brand, productType, price, quantity, size }) => (
    <article key={id} className={styles.itemCardWrapper}>
      <picture className={styles.imageWrapper}>
        <Image
          src={"/../public/women/bag-removebg-preview.png"}
          alt="primera foto del sumario de fotos del producto de hombres"
          width={250}
          height={250}
          className={styles.img}
        />
      </picture>

      <section className={styles.infoWrapper}>
        <div className={styles.generalDescription}>
          <div className={styles.prdName}>
            <h3>{brand}</h3>
            <span>{productType}</span>
          </div>
          <div className={styles.sizeQt}>
            <div className={styles.size}>
              <div>
                <span>Talla: {size}</span>
              </div>
            </div>
            <div className={styles.quantity}>
              <span>Cantidad: {quantity}</span>
            </div>
          </div>
        </div>
        <div className={styles.prices}>
          <h4>
            $<span>{price}</span>
          </h4>
          <h3>
            $<span>{price * quantity}</span>
          </h3>
        </div>
      </section>

      <div className={styles.actionButtonsWrapper}>
        <ul className={styles.btnList}>
          <li>
            <HeartIcon />
          </li>
          <li onClick={() => setProductIdToEdit(id)}>
            <Edit2 />
          </li>
          <li onClick={() => deleteFromCart(id)}>
            <Trash />
          </li>
        </ul>
      </div>
    </article>
  ))
}
