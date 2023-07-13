import { query } from "@/config/dbConnection"

async function handler(req, res) {
  const { query: param } = req

  const consul =
    "SELECT * FROM `products` inner join cat_prod on products.ID_cat=cat_prod.ID_cat WHERE products.prID = ?"

  const product = await query({
    query: consul,
    values: [param.idProduct],
  })

  res.status(200).json({ products: product })
}

export default handler
