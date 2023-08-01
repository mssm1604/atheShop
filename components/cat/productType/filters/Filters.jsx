"use client"

import { ArrowRight } from "@/components/icons/Icons"
import { useFilters } from "@/hooks/useFilters"
import styles from "./Filters.module.css"
import { useRef } from "react"

function Filters({ sectionName }) {
  const { filters, setFilters } = useFilters()
  const filtersSection = useRef()

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      brand: event.target.value,
    }))
  }

  const handleOnMouseEnter = (e) => {
    const idItem = e.target.parentElement.id
    const target = e.target

    if (idItem === "filtersSection") {
      filtersSection.current.style.cssText =
        "border:1px solid black; padding-block: 10px; bottom:auto;"
    } else if (idItem === "orderBySection") {
    } else {
    }
  }
  const handleOnMouseLeave = (e) => {
    const idItem = e.target.parentElement.id
    const target = e.target

    if (idItem == "filtersSection") {
      filtersSection.current.style.cssText = "bottom:0"
    } else if (idItem === "orderBySection") {
    } else {
    }
  }

  return (
    <section className={`${styles.flexRow} ${styles.filtersBar}`}>
      <div className={styles.sectionName}>
        <h4>{`${sectionName?.productTypeList} para ${sectionName?.categorie}`}</h4>
      </div>

      <div className={`${styles.flexRow} ${styles.filtersAndSelections}`}>
        <div className={`${styles.flexRow} ${styles.filters}`}>
          <div
            id="filtersSection"
            className={`${styles.groupWrapper} ${styles.filtersSection}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <button className={`${styles.flexRow} ${styles.filterButton}`}>
              Filtros{" "}
              <span>
                <ArrowRight />
              </span>
            </button>

            <section
              ref={filtersSection}
              className={`${styles.filtersOptionsWrapper}`}
            >
              <div
                className={`${styles.flexColumn} ${styles.listOptionsWrapper}`}
              >
                <section
                  className={`${styles.listWrapper} ${styles.productTypeList}`}
                >
                  <h4>tipo de producto</h4>
                  <ul className={`${styles.flexRow} ${styles.filtersOptions}`}>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      pantalones
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      pantalones
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      pantalones
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      camisetas
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      camisas
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      sudaderas
                    </li>
                  </ul>
                </section>
                <section
                  className={`${styles.listWrapper} ${styles.productTypeList}`}
                >
                  <h4>tipo de producto</h4>
                  <ul className={`${styles.flexRow} ${styles.filtersOptions}`}>
                    <li>pantalones</li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      pantalones
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      pantalones
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      camisetas
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      camisas
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="" />
                      </span>
                      sudaderas
                    </li>
                  </ul>
                </section>
              </div>
              <button>apply changes</button>
            </section>
          </div>
          <div
            id="orderBySection"
            className={`${styles.groupWrapper} ${styles.orderBy}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <button className={`${styles.flexRow} ${styles.filterButton}`}>
              Ordenar por{" "}
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div
          id="selectionsSection"
          className={`${styles.groupWrapper} ${styles.selections}`}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <button className={`${styles.flexRow} ${styles.filterButton}`}>
            Selecciones{" "}
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* <div className={styles.filtersSummary}>
        <div className={styles.summaryList}>
          <ul>
            {Object.entries(filters).map((key, value) => (
              <li key={key}>
                <button>
                  <h4>
                    {`${key}`}
                    <span>
                      <Close />
                    </span>
                  </h4>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  )
}

export { Filters }
