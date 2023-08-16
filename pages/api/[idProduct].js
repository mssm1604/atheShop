import { query } from "@/config/dbConnection"

async function handler(req, res) {
  const { query: param } = req

  const consul =
    "SELECT * FROM `products` WHERE products.prID = ?"

  const product = await query({
    query: consul,
    values: [param.idProduct],
  })

  res.status(200).json({ products: product })
}

export default handler
