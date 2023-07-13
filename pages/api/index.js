import { query } from "@/config/dbConnection"

async function handler(req, res) {
  let { categorie, productTypeList} = req.body

  if (productTypeList.includes("%20")) productTypeList = "readyToWear"

  const consul =
    "SELECT * FROM `products` inner join cat_prod on products.ID_cat=cat_prod.ID_cat WHERE products.productType = ? and cat_prod.name_cat = ? "

  const products = await query({
    query: consul,
    values: [productTypeList, categorie],
  })

  res.status(200).json({ products: products })
}

export default handler
