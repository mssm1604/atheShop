import { supabase } from '@/config/dbQuery'

async function handler(req, res) {
	let { categorie, subCategorie, productType } = req.body

	console.log(productType)

	const parsedArray =
		typeof productType === 'object' && productType.map(item => `'${item}'`)

	const { data: products } =
		productType === 'all'
			? await supabase
					.from(`products`)
					.select(`*, cat_prod!inner(name_cat)`)
					.eq('subCategorie', `${subCategorie}`)
					.eq('cat_prod.name_cat', `${categorie}`)
			: await supabase
					.from(`products`)
					.select(`*, cat_prod!inner(name_cat)`)
					.eq('subCategorie', `${subCategorie}`)
					.eq('cat_prod.name_cat', `${categorie}`)
					.in('productType', [productType])

	console.log(products)

	const { data: productTypesList } = await supabase
		.from('distinct_producttypes')
		.select()

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
