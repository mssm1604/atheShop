import { ProductCard } from './ProductCard'
import styles from './productType.module.css'

function ListOfProducts({ products, subCategorie, handleShowMoreProducts }) {
	return (
		<section className={`${styles.listOfProducts}`}>
			{products?.map(({ id, prodName, price, images }) => (
				<ProductCard
					key={id}
					product={{ id, prodName, price, images }}
					subCategorie={subCategorie}
				/>
			))}
		</section>
	)
}

export { ListOfProducts }
