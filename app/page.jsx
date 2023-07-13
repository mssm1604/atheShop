"use client"

import styles from "@/styles/Home.module.css"
import { ArrowLeft, ArrowRight } from "@/components/icons/Icons"
import { useState } from "react"
import { SecCategories } from "@/components/home/SecCategories"
import Image from "next/image"
import { Header } from "@/components/header/Header"

function Home() {
  const [activateClass, setActivateClass] = useState()

  const handleDescriptionClick = () => {
    setActivateClass(true)
  }

  const handleReturnClick = () => {
    setActivateClass(false)
  }

  return (
    <>
      <Header headType={'mainView'}/>
      <section className={styles.infoWrapper}>
        <div className={styles.bgWrapper}>
          <Image
            src="/../public/gucci.jpg"
            alt="main picture"
            className={styles.background}
            fill
            priority
          />
        </div>

        {/* <div
          className={
            activateClass
              ? `${styles.descubre} ${styles.activeD}`
              : styles.descubre
          }
          onClick={handleDescriptionClick}
        >
          <h3 className={styles.descubreH3}>
            Descubre lo nuevo{" "}
            <span className={styles.descubreSpan}>
              {" "}
              <ArrowRight />{" "}
            </span>
          </h3>
        </div>

        <div className={styles.infoContent}>
          <article
            className={
              activateClass
                ? `${styles.infoDescription} ${styles.infoActive}`
                : styles.infoDescription
            }
          >
            <div className={styles.descriptionWrapper}>
              <h3>Colección 2023</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                exercitationem officia voluptate facilis animi, mollitia vitae
                nostrum eaque suscipit harum iste. Veniam voluptate dolorem eos
                quas iusto perferendis beatae vero?
                <span
                  className={
                    activateClass
                      ? `${styles.extraDescriptionSpan}`
                      : `${styles.descriptionWrapperSpan}`
                  }
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque exercitationem officia voluptate facilis animi, mollitia
                  vitae nostrum eaqu Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Atque exercitationem officia voluptate
                  facilis animi, mollitia vitae nostrum eaqu
                </span>
              </p>

              <button
                className={
                  activateClass
                    ? `${styles.dwButtonAct}`
                    : `${styles.descriptionWrapperButton}`
                }
              >
                Ver colección
              </button>

              <span
                className={
                  activateClass
                    ? `${styles.arrowSpan}`
                    : `${styles.descriptionWrapperSpan}`
                }
                onClick={handleReturnClick}
              >
                <ArrowLeft />
              </span>
            </div>
          </article>
        </div> */}
      </section>

      <>
        <SecCategories />
      </>
    </>
  )
}

export default Home
