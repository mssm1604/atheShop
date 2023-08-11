import { query } from "@/config/dbConnection"

async function handler(req, res) {
  let { categorie, subCategorie, productType } = req.body
  let consul
  const parsedArray =
    typeof productType === "object" && productType.map((item) => `'${item}'`)

  productType == "all"
    ? (consul = `SELECT * FROM products 
  inner join cat_prod on products.ID_cat=cat_prod.ID_cat 
  WHERE products.subCategorie = ? and cat_prod.name_cat = ? `)
    : (consul = `SELECT * FROM products 
  inner join cat_prod on products.ID_cat=cat_prod.ID_cat 
  WHERE products.subCategorie = ? and products.productType IN (${parsedArray}) and cat_prod.name_cat = ? `)

  const products = await query({
    query: consul,
    values: [subCategorie, categorie],
  })

  res.status(200).json({ products: products })
}

export default handler
