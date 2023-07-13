"use client"

import styles from "./Header.module.css"
import { HeartIcon, CartIcon, UserIcon, Close, Menu } from "../icons/Icons"
import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import { useRef } from "react"

function Header({ headType }) {
  document.body.style.overflow = "auto"
  const mobileNav = useRef()
  const header = useRef()

  const handleOnBlur = (e) => {
    const id = e.target.id
    id === "overlay" && mobileNav.current.setAttribute("data-visible", false)
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
              <Link href="/cart" className={styles.a}>
                <CartIcon className={styles.icons} />
                {cart.length > 0 ? (
                  <span className={`${styles.cartCounter} ${styles[headType]}`}>
                    {cart.length}
                  </span>
                ) : (
                  ""
                )}
              </Link>
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
              <Link href={"/cat/women"}>Mujeres</Link>
            </li>
            <li>
              <Link href={"/cat/men"}>Hombres</Link>
            </li>
            <li>
              <Link href={"/cat/kids"}>Niños</Link>
            </li>
            <li>
              <Link href={"/cat/sports"}>Deportes</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile nav */}
      <section
        ref={mobileNav}
        id="overlay"
        data-visible="false"
        className={styles.overlay}
        onClick={handleOnBlur}
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
                <Link href={"/cat/men"}>Hombres</Link>
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
                <Link href={"/cat/kids"}>Niños</Link>
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
                <Link href={"/cat/sports"}>Deportes</Link>
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
