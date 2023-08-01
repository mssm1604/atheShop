import axios from "axios"
import { useFilters } from "./useFilters"

function useProducts() {
  const { filters, filterProductsFn } = useFilters()

  const getDataFromDb = async ({ categorie, productTypeList, idProduct }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/${idProduct ? idProduct : ""}`,
        {
          categorie,
          productTypeList,
        }
      )

      return data.products
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const getFilteredProducts = async (params) => {
    const products = await getDataFromDb(params)
    return filterProductsFn(products)
  }

  return { filters, getDataFromDb, getFilteredProducts }
}

export { useProducts }
