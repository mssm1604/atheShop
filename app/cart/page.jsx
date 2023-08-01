"use client"

import { Header } from "@/components/header/Header"
import styles from "./cart.module.css"
import { useCart } from "@/hooks/useCart"
import { useState } from "react"
import { EditView } from "@/components/cart/EditView"
import { CartSummary } from "@/components/cart/CartSummary"
import { CartEmptySection } from "@/components/cart/CartEmptySection"
import { ItemsInCart } from "@/components/cart/ItemsInCart"

function CartPage() {
  const { cart, deleteFromCart } = useCart()
  const [productIdToEdit, setProductIdToEdit] = useState(null)

  return (
    <>
      <div className={styles.globalWrapper}>
        <Header headType={"cartView"} />
        {cart.length <= 0 ? (
          <CartEmptySection />
        ) : (
          <main className={styles.main}>
            <section className={styles.productsCount}>
              <h1 className={styles.h1}>Mi carrito de compras</h1>

              <div className={styles.itemsWrapper}>
                <ItemsInCart
                  cart={cart}
                  deleteFromCart={deleteFromCart}
                  setProductIdToEdit={setProductIdToEdit}
                />
              </div>
            </section>

            <CartSummary cart={cart} />
          </main>
        )}

        {productIdToEdit && (
          <EditView
            idProduct={productIdToEdit}
            setProductIdToEdit={setProductIdToEdit}
          />
        )}
      </div>
    </>
  )
}

export default CartPage
