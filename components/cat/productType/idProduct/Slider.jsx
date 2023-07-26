"use client"

import Image from "next/image"
import styles from "./slider.module.css"
import { ArrowLeft, ArrowRight } from "@/components/icons/Icons"
import { useRef, useState } from "react"

export function Slider({ carouselImages }) {
  const carouselFocus = useRef()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectNextImage = (index, arrImages, ifNext = true) => {
    const condition = ifNext ? index < carouselImages?.length - 1 : index > 0
    const moveValue = 100 / carouselImages?.length

    const nextIndex = ifNext
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : carouselImages?.length - 1

    ifNext
      ? (carouselFocus.current.style.transform = `translate(-${
          moveValue * nextIndex
        }%)`)
      : (carouselFocus.current.style.transform = `translate(-${
          index == 0 ? 80 : index * moveValue - moveValue
        }%)`)

    setSelectedIndex(nextIndex)
  }

  const handleLeftBtnClick = () => {
    selectNextImage(selectedIndex, carouselImages, false)
  }

  const handleRightBtnClick = () => {
    selectNextImage(selectedIndex, carouselImages)
  }

  return (
    <>
      <section className={styles.carouselWrapper}>
        <ul ref={carouselFocus} className={styles.carouselFocus}>
          {carouselImages?.map((imageLink, index) => (
            <li key={index} className={styles.sliderItem}>
              <Image src={imageLink} alt={`imagen ${index}`} fill />
            </li>
          ))}
        </ul>
        <button
          onClick={handleLeftBtnClick}
          className={`${styles.button} ${styles.leftButton} `}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleRightBtnClick}
          className={`${styles.button} ${styles.rightButton} `}
        >
          <ArrowRight />
        </button>
      </section>
    </>
  )
}
