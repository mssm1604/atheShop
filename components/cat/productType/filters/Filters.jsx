"use client"

import styles from "./Filters.module.css"
import { ArrowRight, Check, Close, Filter } from "@/components/icons/Icons"
import { useFilters } from "@/hooks/useFilters"
import { useRef, useState } from "react"

function Filters({ sectionName }) {
  const [productTypeOptions, setProductTypeOptions] = useState([])
  const { filters, setFilters } = useFilters()

  const filtersAndSelections = useRef()
  const productTypeSection = useRef()
  const orderBySection = useRef()
  const selectionsSection = useRef()

  const handleOnMouseEnter = (e) => {
    const currentElemetId = e.target.id
    const cssStyles =
      "display:flex; border:1px solid black; padding-block: 10px; bottom:auto;"

    const sectionsToShow = {
      productTypeSection,
      orderBySection,
      selectionsSection,
    }

    sectionsToShow[currentElemetId].current.style.cssText = cssStyles
  }

  const handleOnMouseLeave = (e) => {
    const childItem = e.target.parentElement.lastChild
    childItem.style.cssText = "display:none; bottom:0;"
  }

  const handleOptionClick = (e) => {
    const parentE = e.target.parentElement
    const parentElValue = e.target.parentElement.id

    const ifItemSelected = parentE.getAttribute("data-selected")

    if (ifItemSelected == "true") {
      parentE.setAttribute("data-selected", false)

      const filterdOptions = productTypeOptions?.filter(
        (value) => value !== parentElValue
      )

      filterdOptions.length <= 0
        ? setProductTypeOptions("all")
        : setProductTypeOptions(filterdOptions)
    } else {
      parentE.setAttribute("data-selected", true)
      setProductTypeOptions((prevState) =>
        prevState !== "all" ? [...prevState, parentElValue] : [parentElValue]
      )
    }
  }

  const handleApplyChanges = () => {
    setFilters((prevState) => ({
      ...prevState,
      productType: productTypeOptions,
    }))
  }

  const handleOrderByClick = (e) => {
    const valueToSet = e.target.id
    setFilters((prevState) => ({ ...prevState, orderBy: valueToSet }))
  }

  const handleShowFiltersSection = () => {
    const ifFiltersVisible =
      filtersAndSelections.current.getAttribute("data-visible")

    if (ifFiltersVisible === "false") {
      filtersAndSelections.current.setAttribute("data-visible", true)
    } else {
      filtersAndSelections.current.setAttribute("data-visible", false)
    }
  }

  return (
    <section className={`${styles.flexRow} ${styles.filtersBar}`}>
      <div className={styles.sectionName}>
        <h4>{`${sectionName?.subCategorie} para ${sectionName?.categorie}`}</h4>
      </div>

      <div
        ref={filtersAndSelections}
        data-visible="false"
        className={`${styles.flexRow} ${styles.filtersAndSelections}`}
      >
        <header className={`${styles.headerFiltersSection}`}>
          <h2>Filtros</h2>

          <span>
            <Close />
          </span>
        </header>
        <div className={`${styles.flexRow} ${styles.filters}`}>
          <div
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            className={`${styles.groupWrapper}`}
          >
            <button
              id="productTypeSection"
              className={`${styles.flexRow} ${styles.filterButton}`}
            >
              Filtros{" "}
              <span>
                <ArrowRight />
              </span>
            </button>

            <section
              ref={productTypeSection}
              className={`${styles.filtersOptionsWrapper}`}
            >
              <div
                className={`${styles.flexColumn} ${styles.listOptionsWrapper}`}
              >
                <section
                  className={`${styles.flexColumn} ${styles.listWrapper} ${styles.productTypeList}`}
                >
                  <h4>tipo de producto</h4>
                  <ul
                    onClick={handleOptionClick}
                    className={`${styles.flexRow} ${styles.filtersOptions}`}
                  >
                    <li id="pantalon" data-selected="false">
                      <span className={styles.spanWrapper}>
                        <Check />
                      </span>
                      <span>pantalón</span>
                    </li>
                    <li id="zapatos" data-selected="false">
                      <span className={styles.spanWrapper}>
                        <Check />
                      </span>
                      <span> zapatos</span>
                    </li>
                    <li id="camisas" data-selected="false">
                      <span className={styles.spanWrapper}>
                        <Check />
                      </span>
                      <span> camisas</span>
                    </li>
                    <li id="sudaderas" data-selected="false">
                      <span className={styles.spanWrapper}>
                        <Check />
                      </span>
                      <span> sudaderas</span>
                    </li>
                  </ul>
                </section>
              </div>
              <div className={`${styles.flexRow} ${styles.buttonsWrapper}`}>
                <button
                  className={styles.btnApplyChanges}
                  onClick={handleApplyChanges}
                >
                  Aplicar cambios
                </button>

                <button className={styles.btnClearSelections}>
                  Quitar selecciones
                </button>
              </div>
            </section>
          </div>

          <div
            className={`${styles.groupWrapper} ${styles.orderBy}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <button
              id="orderBySection"
              className={`${styles.flexRow} ${styles.filterButton}`}
            >
              <div style={{ pointerEvents: "none" }}>
                Ordenar por
                <span className={styles.selectedOptionSpan}>
                  {filters?.orderBy !== "none" &&
                    ` ${
                      filters?.orderBy == "low-high"
                        ? "precio bajo - alto"
                        : "precio alto - bajo"
                    }`}
                </span>
              </div>
              <span>
                <ArrowRight />
              </span>
            </button>

            <section
              ref={orderBySection}
              className={styles.orderByOptionsWrapper}
            >
              <div className={styles.orderByOptions}>
                <ul
                  onClick={handleOrderByClick}
                  className={`${styles.flexColumn} ${styles.orderByList}`}
                >
                  <li id="low-high">Precio bajo - alto</li>
                  <li id="high-low">Precio alto - bajo</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className={`${styles.selections}`}>
          <div
            className={`${styles.groupWrapper} ${styles.selectionsWrapper} `}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <button
              id="selectionsSection"
              className={`${styles.flexRow} ${styles.filterButton}`}
            >
              Selecciones{" "}
              <span>
                <ArrowRight />
              </span>
            </button>

            <section
              ref={selectionsSection}
              className={styles.selectionsSummaryWrapper}
            >
              <div className={styles.selectionsListWrapper}>
                {filters.productType == "all" ? (
                  <h4>No hay filtros seleccionados</h4>
                ) : (
                  <>
                    <h4>Tipo de producto</h4>
                    <ul
                      onClick={handleOrderByClick}
                      className={`${styles.flexColumn} ${styles.selectionsList}`}
                    >
                      {filters.productType?.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className={styles.filtersButtonWrapper}>
        <button
          onClick={handleShowFiltersSection}
          className={`${styles.flexRow} ${styles.button}`}
        >
          Filtros
          <span>
            <Filter />
          </span>
        </button>
      </div>
    </section>
  )
}

export { Filters }
