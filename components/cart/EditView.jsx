"use client"

import { useEffect, useState } from "react"
import styles from "./editView.module.css"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"
import { EditViewSelect } from "@components/cart/EditViewSelect"

export function EditView({ idProduct, setProductIdToEdit }) {
  const [currentProductToEdit, setCurrentProductToEdit] = useState(null)
  const [ifUploadData, setIfUploadData] = useState({})
  const talla = ["XS", "S", "M", "L", "XL"]
  const cantidad = [1, 2, 3, 4, 5, 6]
  const colors = ["Verde", "Naranja", "Café", "Azul", "Violeta"]

  const { cart, findProductInCart, updateProduct } = useCart()

  const handleBtnSaveClick = (id) => {
    updateProduct(id, ifUploadData)
    setCurrentProductToEdit(null)
  }

  useEffect(() => {
    const productInCartIndex = findProductInCart(idProduct)
    setCurrentProductToEdit(cart[productInCartIndex])

    setIfUploadData({
      talla: cart[productInCartIndex].size,
      cantidad: cart[productInCartIndex].quantity,
    })
  }, [])

  return (
    <section className={styles.overlay}>
      <article className={styles.editView}>
        <div className={styles.mainContentWrapper}>
          {" "}
          <div className={styles.selectionsWrapper}>
            <div className={styles.title}>
              <h3>{currentProductToEdit?.brand}</h3>
              <span>{currentProductToEdit?.productType}</span>
            </div>
            <div className={styles.optionsWrapper}>
              <EditViewSelect
                inputValue={ifUploadData?.talla}
                setValue={setIfUploadData}
                selectName={"talla"}
                selectOptions={talla}
              />

              <EditViewSelect
                inputValue={ifUploadData?.cantidad}
                setValue={setIfUploadData}
                selectName={"cantidad"}
                selectOptions={cantidad}
              />
              <EditViewSelect
                inputValue={ifUploadData?.qt}
                setValue={setIfUploadData}
                selectName={"Color"}
                selectOptions={colors}
              />
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
                <span>${currentProductToEdit?.price}</span>
              </div>
              <div className={styles.totalPriceSection}>
                <h4 className={styles.priceLabel}>Precio total</h4>
                <span>
                  $
                  {currentProductToEdit?.price * currentProductToEdit?.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.saveAndCancelWrapper}>
          <button
            onClick={() => {
              handleBtnSaveClick(currentProductToEdit.id)
              setProductIdToEdit(null)
            }}
            className={`${styles.button} ${styles.saveButton}`}
          >
            <span>Guardar</span>
          </button>
          <button
            onClick={() => setProductIdToEdit(null)}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            <span>Cancerlar</span>
          </button>
        </div>
      </article>
    </section>
  )
}
