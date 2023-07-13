"use client"

import { Close } from "@/components/icons/Icons"
import styles from "./Filters.module.css"
import { useFilters } from "@/hooks/useFilters"

function Filters() {
  const { filters, setFilters } = useFilters()

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

  return (
    <section className={styles.filtersBar}>
      <div className={styles.filtersGroupButtons}>
        <ul>
          <li>
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.minPrice}
              onChange={handleChangeMinPrice}
            />
            <span>$ {filters.minPrice}</span>

            {/* <button>Categoría</button> */}
          </li>
          <li>
            <label htmlFor="brand">Marca</label>
            <select id="brand" onChange={handleChangeCategory}>
              <option value="all">Todos</option>
              <option value="Gucci">Gucci</option>
              <option value="Adidas">Adidas</option>
              <option value="Nike">Nike</option>
            </select>
            {/* <button>Filtros</button> */}
          </li>
          <li>
            {/* <button>
                Ordenar por: <span></span>
              </button> */}
          </li>
        </ul>
      </div>

      <div className={styles.filtersSummary}>
        <div>
          <h4>Filtros: </h4>
        </div>

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
      </div>
    </section>
  )
}

export { Filters }
