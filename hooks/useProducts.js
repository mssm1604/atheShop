import axios from "axios"
import { useFilters } from "./useFilters"

function useProducts() {
  const { filters, filterProductsFn } = useFilters()

  const getDataFromDb = async (params, idPr) => {
    const { categorie, productTypeList } = params

    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/${idPr ? idPr : ""}`,
        {
          categorie,
          productTypeList,
        }
      )

      return data.products
    } catch (error) {
      console.log(error)
    }
  }

  const getFilteredProducts = async (params) => {
    const products = await getDataFromDb(params)
    return filterProductsFn(products)
  }

  return { filters, getDataFromDb, getFilteredProducts }
}

export { useProducts }
