"use client"

import styles from "./productView.module.css"
import Image from "next/image"
import { ProductCard } from "@/components/cat/productType/ProductCard"
import { useCart } from "@/hooks/useCart"
import { useEffect, useState } from "react"
import { useProducts } from "@/hooks/useProducts"
import { Header } from "@/components/header/Header"
import { Slider } from "@/components/cat/productType/idProduct/Slider"

function ProductView({ params }) {
  const [product, setProduct] = useState([])
  const [productInCartIndex, setProductInCartIndex] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState(null)

  const { cart, addToCart, findProductInCart } = useCart()

  const { getDataFromDb } = useProducts()

  const getProductsFn = async () => {
    const [products] = await getDataFromDb(params, params.idProduct)
    setProduct(products)
  }

  const checkIfProductInCart = async (id) => {
    const isProductInCart = await findProductInCart(id)
    setProductInCartIndex(isProductInCart)
  }

  const handleOnClickAddToCart = () => {
    const cartLength = cart.length
    console.log(cartLength)
    addToCart(product, quantity, size)
    setProductInCartIndex(cartLength + 1)
  }

  const handleOnChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleOnChangeSize = (e) => {
    setSize(e.target.value)
  }

  useEffect(() => {
    getProductsFn()
    checkIfProductInCart(params.idProduct)
  }, [])

  return (
    <>
      <Header headType={"productsView"} />
      <div className={styles.pageWrapper}>
        <main className={styles.mainInfoWrapper}>
          <section className={styles.productPictures}>
            <ul>
              {product.images?.array.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image}
                    alt="primera foto del sumario de fotos del producto de hombres"
                    fill
                  />
                </li>
              ))}
            </ul>
          </section>

          <Slider carouselImages={product.images?.array} />

          <section className={styles.productInfo}>
            {/*  */}

            <div className={styles.stickyWrapper}>
              <section className={styles.titleAndPrice}>
                <div>
                  <div className={styles.titleWrapper}>
                    <h4>{product.brand}</h4>
                    <p>{product.productType}</p>
                  </div>
                  <div className={styles.priceWrapper}>
                    $ <span>{product.price}</span>
                  </div>
                </div>
              </section>

              <section className={styles.purchaseContent}>
                {/*  */}
                <div className={styles.qtSizeGuide}>
                  {/*  */}
                  <div className={styles.qt}>
                    <div className={styles.wrapper}>
                      <label htmlFor="quantity">Cantidad</label>

                      {productInCartIndex > 0 ? (
                        <span>{cart[productInCartIndex]?.quantity}</span>
                      ) : (
                        <select
                          className={styles.select}
                          id="quantity"
                          onChange={handleOnChangeQuantity}
                        >
                          <option value="0">Selecciona</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      )}
                    </div>
                    {/* <span>{quantity}</span> */}
                  </div>
                  <div className={styles.size}>
                    <div className={styles.wrapper}>
                      <label htmlFor="Talla">Talla</label>

                      {productInCartIndex > 0 ? (
                        <span>{cart[productInCartIndex]?.size}</span>
                      ) : (
                        <select
                          className={styles.select}
                          id="Talla"
                          onChange={handleOnChangeSize}
                        >
                          <option value="0">Selecciona</option>
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.buttonsWrapper}>
                  <button
                    className={`${styles.addToCart} ${
                      productInCartIndex > 0 ? styles.inCart : styles.notInCart
                    }`}
                    onClick={handleOnClickAddToCart}
                  >
                    <span className={styles.btnText}>
                      {productInCartIndex > 0
                        ? "Ver carrito"
                        : "agregar al carrito"}
                    </span>
                  </button>
                  <button className={styles.purchaseNow}>
                    <span className={styles.btnText}>Comprar ahora</span>
                  </button>
                </div>
                {/*  */}
              </section>
            </div>
          </section>
        </main>

        <section className={styles.productDescription}>
          <div className={styles.description}>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              N. del T. persona que Lorem Ipsum es simplemente el texto de
              relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
              el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor N. del T. persona que
            </p>
          </div>

          <div className={styles.details}>
            <h3> Detalles del producto</h3>
            <ul className={styles.detailsList}>
              <li>100% algodón</li>
              <li>Cuello redondo</li>
              <li>Slim fit</li>
              <li>Logo clásico</li>
            </ul>
          </div>
        </section>
        {/*  */}

        {/* <section className={styles.relatedProdycts}>
          <h2>Artículos relacionados</h2>
          <div>
            <ul className={styles.relatedProductsList}>
              <li>
                <ProductCard
                  product={{
                    brand: "adidas",
                    productType: "Shoes",
                    price: "200",
                  }}
                  imageOnHover={"nine.jpg"}
                />
              </li>
            </ul>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default ProductView
