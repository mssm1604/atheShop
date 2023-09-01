import { getDomain } from '@/lib/getDomain'
import axios from 'axios'

export async function getProducts({ params, productType, numberProducts }) {
	const { categorie, subCategorie, idProduct } = params
	const domain = getDomain()

	try {
		const { data } = await axios.post(
			`${domain}/api/${idProduct ? idProduct : ''}`,
			{
				categorie,
				subCategorie,
				productType,
				numberProducts
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
				images: images?.colection
			})
		)

		const productTypesList = data.productTypesList

		return {
			formatedData,
			productTypesList
		}
	} catch (error) {
		// throw new Error('Problemas al obtener productos ')
		console.log(error)
	}
}
