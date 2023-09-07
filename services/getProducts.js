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
			({ prID, productName, productType, price, stock, id_cat, images }) => ({
				id: prID,
				prodType: productType,
				price,
				prodName: productName,
				stock,
				idCat: id_cat,
				images: images?.colection
			})
		)

		const totalProducts = data.totalProducts

		return {
			formatedData,
			totalProducts
		}
	} catch (error) {
		throw new Error('Problemas al obtener productos ')
	}
}

// insert into products
//("productName", "subCategorie", "productType", price, stock,  images, id_cat)
//values ('camisa', 'ropa', 'camisa',  145990, 56,
//'{"colection": ["/hombre/ropa/pantalon.jpg", "/hombre/ropa/pantalonOnHover.jpg"]}', 2)
