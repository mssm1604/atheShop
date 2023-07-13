"use client"

import { Header } from "@/components/header/Header"
import {
  ArrowDown,
  CartEmpty,
  Edit2,
  HeartIcon,
  Trash,
} from "@/components/icons/Icons"
import styles from "./cart.module.css"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"
import Link from "next/link"
import { useState } from "react"

function CartPage() {
  const [currentProduct, setCurrentProduct] = useState(null)
  const [renderQt, setRenderQt] = useState([])
  const { cart } = useCart()

  const handleBtnEditClick = (id) => {
    const productInCartIndex = cart.findIndex((item) => item.id === id)
    renderQuantityOpt(6)
    setCurrentProduct(cart[productInCartIndex])
  }

  const handleBtnCancelClick = () => {
    setCurrentProduct(null)
  }

  const handleBtnSaveClick = () => {}

  const renderQuantityOpt = (times) => {
    const array = []
    for (let index = 0; index < times; index++) {
      array.push(index + 1)
    }
    setRenderQt(array)
  }

  return (
    <>
      <div className={styles.globalWrapper}>
        <Header headType={"cartView"} />
        {cart.length <= 0 ? (
          <>
            <section className={styles.cartEmptySection}>
              <div className={styles.titleWrapper}>
                <h1>carrito de compras vacío</h1>
              </div>
              <div className={styles.emptyIcoWrapper}>
                <CartEmpty />
              </div>

              <div className={styles.suggestionsWrapper}>
                <h3 className={styles.suggestionsTitle}>
                  Sugerencias para ti:
                </h3>
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
          </>
        ) : (
          <main className={styles.main}>
            <section className={styles.productsCount}>
              <h1 className={styles.h1}>Mi carrito de compras</h1>

              {cart.map(({ id, brand, productType, price, quantity }) => (
                <div key={id} className={styles.itemCardWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={"/../public/women/bag-removebg-preview.png"}
                      alt="primera foto del sumario de fotos del producto de hombres"
                      width={250}
                      height={250}
                      className={styles.img}
                    />
                  </div>

                  <div className={styles.infoWrapper}>
                    <div className={styles.generalDescription}>
                      <div className={styles.prdName}>
                        <h3>{brand}</h3>
                        <span>{productType}</span>
                      </div>
                      <div className={styles.sizeQt}>
                        <div className={styles.size}>
                          <div>
                            <span>Talla: M</span>
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
                  </div>

                  <div className={styles.actionButtonsWrapper}>
                    <ul className={styles.btnList}>
                      <li>
                        <HeartIcon />
                      </li>
                      <li onClick={() => handleBtnEditClick(id)}>
                        <Edit2 />
                      </li>
                      <li>
                        <Trash />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </section>

            <aside className={styles.summary}>
              <h2 className={styles.h2}>Recuento</h2>

              <div className={styles.summaryInfoWrapper}>
                <div className={styles.summaryCount}>
                  <div>
                    <span>Subtotal</span>
                    <span>$1548,34</span>
                  </div>
                  <div>
                    <span>Envío</span>
                    <span>$10</span>
                  </div>
                  <div>
                    <span>impuestos</span>
                    <span>$76,43</span>
                  </div>
                  <div className={styles.summaryTotal}>
                    <span>Total</span>
                    <span>$1548,34</span>
                  </div>
                </div>

                <div className={styles.buttonsWrapper}>
                  <button className={`${styles.button} ${styles.checkout}`}>
                    <span>proceder al pago</span>
                  </button>
                  <button className={`${styles.button} ${styles.payWithPP}`}>
                    <span>pagar con paypal</span>
                  </button>
                </div>
              </div>
            </aside>
          </main>
        )}

        {/* On edit view */}
        {currentProduct && (
          <section className={styles.overlay}>
            <article className={styles.editView}>
              <div className={styles.mainContentWrapper}>
                {" "}
                <div className={styles.selectionsWrapper}>
                  <div className={styles.title}>
                    <h3>{currentProduct.brand}</h3>
                    <span>{currentProduct.productType}</span>
                  </div>
                  <div className={styles.optionsWrapper}>
                    <div className={`${styles.input} ${styles.optSize}`}>
                      <label htmlFor="sizeSelector">Talla</label>
                      <div className={styles.selectorWrapper}>
                        <select className={styles.select} id="sizeSelector">
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="l">L</option>
                        </select>
                        <div className={styles.inputSvg}>
                          <ArrowDown />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.input} ${styles.optQuantity}`}>
                      <label htmlFor="quantitySelector">Cantidad</label>
                      <div className={styles.selectorWrapper}>
                        <select className={styles.select} id="quantitySelector">
                          {renderQt.map((number) =>
                            currentProduct.quantity === number ? (
                              <option
                                key={number}
                                value={number}
                                selected
                              >
                                {number}
                              </option>
                            ) : (
                              <option key={number} value={number}>
                                {number}
                              </option>
                            )
                          )}
                        </select>
                        <div className={styles.inputSvg}>
                          <ArrowDown />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.input} ${styles.optColor}`}>
                      <label htmlFor="colorSelector">Color</label>
                      <div className={styles.selectorWrapper}>
                        <select className={styles.select} id="colorSelector">
                          <option value="verde">Verde</option>
                          <option value="rojo">Rojo</option>
                          <option value="azul">Azul</option>
                        </select>
                        <div className={styles.inputSvg}>
                          <ArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className={styles.pictureAndPrices}>
                  <div className={styles.pictureWrapper}>
                    <Image
                      src={"/../public/camisaRoja-sinFondo.jpg"}
                      alt="primera foto del sumario de fotos del producto de hombres"
                      fill
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.prices}>
                    <div className={styles.unitPriceSection}>
                      <h4 className={styles.priceLabel}>Precio unitaro</h4>
                      <span>${currentProduct.price}</span>
                    </div>
                    <div className={styles.totalPriceSection}>
                      <h4 className={styles.priceLabel}>Precio total</h4>
                      <span>
                        ${currentProduct.price * currentProduct.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.saveAndCancelWrapper}>
                <button className={`${styles.button} ${styles.saveButton}`}>
                  <span>Guardar</span>
                </button>
                <button
                  onClick={handleBtnCancelClick}
                  className={`${styles.button} ${styles.cancelButton}`}
                >
                  <span>Cancerlar</span>
                </button>
              </div>
            </article>
          </section>
        )}
      </div>
    </>
  )
}

export default CartPage
