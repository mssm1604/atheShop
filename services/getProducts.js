import axios from "axios"

export async function getProducts({ params, productType }) {
  const { categorie, subCategorie, idProduct } = params
  try {
    const { data } = await axios.post(
      `http://localhost:3000/api/${idProduct ? idProduct : ""}`,
      {
        categorie,
        subCategorie,
        productType,
      }
    )

    const formatedData = data.products.map(
      ({ prID, productName, productType, price, stock, ID_cat, images }) => ({
        id: prID,
        prodType: productType,
        price,
        prodName: productName,
        stock,
        idCat: ID_cat,
        images: images?.colection,
      })
    )

    return formatedData
  } catch (error) {
    throw new Error("Problemas al obtener productos ")
  }
}
