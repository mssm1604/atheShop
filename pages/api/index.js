import { query } from '@/config/dbConnection'

async function handler(req, res) {
	let { categorie, subCategorie, productType } = req.body
	let searchProductConsul
	const parsedArray =
		typeof productType === 'object' && productType.map(item => `'${item}'`)

	productType == 'all'
		? (searchProductConsul = `SELECT * FROM products 
  inner join cat_prod on products.ID_cat=cat_prod.ID_cat 
  WHERE products.subCategorie = ? and cat_prod.name_cat = ? `)
		: (searchProductConsul = `SELECT * FROM products 
  inner join cat_prod on products.ID_cat=cat_prod.ID_cat 
  WHERE products.subCategorie = ? and products.productType IN (${parsedArray}) and cat_prod.name_cat = ? `)

	const products = await query({
		query: searchProductConsul,
		values: [subCategorie, categorie],
	})

	const searchProductTypesConsul = ` SELECT productType FROM products 
  INNER JOIN cat_prod ON products.ID_cat = cat_prod.ID_cat
  WHERE products.subCategorie = ? and cat_prod.name_cat = ?`

	const productTypesList = await query({
		query: searchProductTypesConsul,
		values: [subCategorie, categorie],
	})

	res
		.status(200)
		.json({ products: products, productTypesList: productTypesList })
}

export default handler
