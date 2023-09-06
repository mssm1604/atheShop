import { supabase } from '@/config/dbQuery'

async function handler(req, res) {
	let { categorie, subCategorie, productType, numberProducts } = req.body

	const query = supabase
		.from(`products`)
		.select(`*, cat_prod!inner(name_cat)`)
		.eq('subCategorie', `${subCategorie}`)
		.eq('cat_prod.name_cat', `${categorie}`)

	const range = range(numberProducts - 4, numberProducts - 1)

	const { data: products } =
		productType === 'all'
			? await query.range()
			: await query.in('productType', [productType])

	const { data: productTypesList } = await supabase
		.from('distinct_producttypes')
		.select()
		.eq('name_cat', categorie).range()

	res
		.status(200)
		.json({ products: products, productTypesList: productTypesList })
}

export default handler

// 	productType == 'all'
// 		? (searchProductConsul = `SELECT * FROM products
//   inner join cat_prod on products.ID_cat=cat_prod.ID_cat
//   WHERE products.subCategorie = ? and cat_prod.name_cat = ? `)
// 		: (searchProductConsul = `SELECT * FROM products
//   inner join cat_prod on products.ID_cat=cat_prod.ID_cat
//   WHERE products.subCategorie = ? and products.productType IN (${parsedArray}) and cat_prod.name_cat = ? `)
