"use client"

import styles from "./Header.module.css"
import { HeartIcon, CartIcon, UserIcon, Close, Menu } from "../icons/Icons"
import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import { useRef } from "react"
import Image from "next/image"

function Header({ headType }) {
  document.body.style.overflow = "auto"
  const mobileNav = useRef()
  const header = useRef()
  const cartPreviewOverlay = useRef()

  const handleOnBlur = (e, itemToToggle) => {
    // const id = e.target.id
    // id === "overlay" && itemToToggle.current.setAttribute("data-visible", false)
    // document.body.style.overflow = "auto"
  }

  const showNavbar = () => {
    const ifNavVisible = mobileNav.current.getAttribute("data-visible")

    if (ifNavVisible == "true") {
      mobileNav.current.setAttribute("data-visible", false)
      document.body.style.overflow = "auto"
    } else if (ifNavVisible == "false") {
      mobileNav.current.setAttribute("data-visible", true)
      document.body.style.overflow = "hidden"
    }
  }

  const handleCartClick = () => {
    const ifCartVisible =
      cartPreviewOverlay.current.getAttribute("data-visible")

    if (ifCartVisible == "true") {
      cartPreviewOverlay.current.setAttribute("data-visible", false)
      document.body.style.overflow = "auto"
    } else if (ifCartVisible == "false") {
      cartPreviewOverlay.current.setAttribute("data-visible", true)
      document.body.style.overflow = "hidden"
    }
  }

  const { cart } = useCart()
  return (
    <>
      <header ref={header} className={`${styles.header} ${styles[headType]} `}>
        <div>
          <Link href={"/"}>
            <h2>ATHE</h2>
          </Link>
        </div>

        <nav className={`${styles.navbar} ${styles[headType]}`}>
          <ul className={`${styles.controlIcons} ${styles[headType]}`}>
            <li>
              <HeartIcon className={styles.icons} />
            </li>
            <li>
              <UserIcon className={styles.icons} />
            </li>
            <li>
              <div href="/" className={styles.a} onClick={handleCartClick}>
                <CartIcon className={styles.icons} />
                {cart.length > 0 && (
                  <span className={`${styles.cartCounter} ${styles[headType]}`}>
                    {cart.length}
                  </span>
                )}
              </div>
            </li>

            <li className={styles.mobileNavToggle}>
              <button
                aria-controls="overlay"
                aria-expanded="false"
                onClick={showNavbar}
              >
                <Menu />
              </button>
            </li>
          </ul>
          <ul className={`${styles.routesList} ${styles[headType]}`}>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/cat/mujer"}>Mujeres</Link>
            </li>
            <li>
              <Link href={"/cat/hombre"}>Hombres</Link>
            </li>
           
            <li>
              <Link href={"/cat/deportes"}>Deportes</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Cart preview */}
      <section
        ref={cartPreviewOverlay}
        className={styles.cartPreviewOverlay}
        data-visible="false"
      >
        <div className={styles.cartPreviewContent}>
          <header className={styles.cartPrevHeader}>
            <div className={styles.brand}>
              <h2>ATHE</h2>
            </div>

            <div className={styles.cartTitleWrapper}>
              <h3 className={styles.title}>carrito de compras</h3>
            </div>
          </header>

          <div className={styles.productsWrapper}>
            {cart.length > 0 ? (
              <>
                {cart.map(({ id, brand, price, quantity }) => (
                  <article key={id} className={styles.productCard}>
                    <picture className={styles.productImageWrapper}>
                      <Image
                        className={styles.productImage}
                        src={"/../public/camisaRoja-sinFondo.jpg"}
                        alt="camisa roja"
                        fill
                      />
                    </picture>
                    <div className={styles.infoWrapper}>
                      <div className={styles.productName}>
                        <h3>{brand}</h3>
                      </div>

                      <div className={styles.quantityTotal}>
                        <div>
                          <h4>Cantidad</h4>
                          <span>{quantity}</span>
                        </div>

                        <div>
                          <h4>Total</h4>
                          <span>$ {quantity * price}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                <div className={styles.buttonWrapper}>
                  <Link className={styles.cartButton} href={"/cart"}>
                    Ver carrito
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.noProducts}>
                  <h4>No hay productos</h4>
                </div>
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.cartButton}
                    onClick={handleCartClick}
                  >
                    Continuar comprando
                  </button>
                </div>
              </>
            )}
          </div>

          <figure onClick={handleCartClick} className={styles.closeIconWrapper}>
            <Close />
          </figure>
        </div>
      </section>

      {/* Mobile nav */}
      <section
        ref={mobileNav}
        id="overlay"
        data-visible="false"
        className={styles.overlay}
        onClick={handleOnBlur(mobileNav)}
      >
        <div>
          <button
            className={styles.mobileNavToggleClose}
            aria-controls="overlay"
            onClick={showNavbar}
          >
            <Close />
          </button>
          <nav className={styles.movileNav}>
            <div className={styles.navHead}>
              <Link href={"/"}>
                <h2 className={styles.titleMobileNav}>ATHE</h2>
              </Link>
            </div>

            <ul className={styles.mbRoutes}>
              <li className={styles.women}>
                <Link className={styles.link} href={"/cat/women"}>
                  Mujeres
                </Link>
                <ul className={styles.subList}>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Zapatos</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Accesorios</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Bolsos</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.men}>
                <Link className={styles.link} href={"/cat/men"}>
                  Hombres
                </Link>
                <ul className={styles.subList}>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.kid}>
                <Link className={styles.link} href={"/cat/kids"}>
                  Niños
                </Link>
                <ul className={styles.subList}>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.sport}>
                <Link className={styles.link} href={"/cat/sports"}>
                  Deportes
                </Link>
                <ul className={styles.subList}>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Ropa</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

export { Header }
