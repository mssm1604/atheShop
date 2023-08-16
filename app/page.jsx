import styles from "@/styles/Home.module.css"
import { SecCategories } from "@/components/home/SecCategories"
import Image from "next/image"
import { Header } from "@/components/header/Header"

function Home() {
  return (
    <>
      <Header headType={"mainView"} />
      <section className={styles.infoWrapper}>
        <div className={styles.bgWrapper}>
          <Image
            src="/mainPicture.jpg"
            alt="main picture"
            className={styles.background}
            priority
            fill
          />
        </div>
      </section>

      <>
        <SecCategories />
      </>
    </>
  )
}

export default Home
