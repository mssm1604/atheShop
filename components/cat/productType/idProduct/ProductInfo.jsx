"use client"

import { useState } from "react"
import styles from "./productInfo.module.css"
import { InputSelect } from "./productInfo/InputSelect"
import { useProductInfo } from "@/hooks/useProductInfo"
import { IfProductInCartSection } from "./productInfo/IfProductInCart"

export function ProductInfo({ product, ifProductInCartId }) {
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const sizes = ["XS", "S", "M", "L", "XL"]
  const quantities = [1, 2, 3, 4]

  const { productInCartIndex, handleOnClickAddToCart } = useProductInfo({
    ifProductInCartId,
  })

  const checkIfNotSelected = () => {
    !size && setSize("error")
    !quantity && setQuantity("error")
  }

  return (
    <section className={styles.productInfo}>
      {/*  */}
      <div className={styles.stickyWrapper}>
        <section className={styles.titleAndPrice}>
          <article>
            <div className={styles.titleWrapper}>
              <h4>{product.brand}</h4>
              <p>{product.productType}</p>
            </div>
            <div className={styles.priceWrapper}>
              $ <span>{product.price}</span>
            </div>
          </article>
        </section>

        <section className={styles.purchaseContent}>
          {/*  */}
          {productInCartIndex < 0 ? (
            <>
              <div className={styles.qtSize}>
                <InputSelect
                  inputValue={quantity}
                  setValue={setQuantity}
                  selectName={"cantidad"}
                  selectOptions={quantities}
                />
                <InputSelect
                  inputValue={size}
                  setValue={setSize}
                  selectName={"talla"}
                  selectOptions={sizes}
                />
              </div>

              <div className={styles.buttonsWrapper}>
                <button
                  className={`${styles.addToCart}`}
                  onClick={() => {
                    checkIfNotSelected()
                    handleOnClickAddToCart(product, quantity, size)
                  }}
                >
                  <span className={styles.btnText}>agregar al carrito</span>
                </button>
                {/* <button className={styles.purchaseNow}>
                  <span className={styles.btnText}>Comprar ahora</span>
                </button> */}
              </div>
            </>
          ) : (
            <IfProductInCartSection
              ifProductInCartId={ifProductInCartId}
              quantity={quantity}
              size={size}
            />
          )}

          {/*  */}
        </section>
      </div>
    </section>
  )
}
