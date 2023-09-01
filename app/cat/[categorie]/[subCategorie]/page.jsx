'use client'

import { CategorieHeader } from '@/components/cat/categorie/CategorieHeader'
import { ListOfProducts } from '@/components/cat/productType/ListOfProducts'
import { Filters } from '@/components/cat/productType/filters/Filters'
import { Header } from '@/components/header/Header'
import { useProductsList } from '@/hooks/useProductsList'
import styles from './ropa.module.css'
import { Loader } from '@/components/loader/Loader'
import { useState } from 'react'

function ProductTypeList({ params }) {
	const [numberProducts, setNumberProducts] = useState(4)
	const { categorie, subCategorie } = params
	const { productTypesList, orderedProducts, loading } = useProductsList({
		params,
		numberProducts
	})

	const handleShowMoreProducts = () => {
		setNumberProducts(prevValue => prevValue + 4)
	}

	return (
		<>
			<Header headType={'mainView'} />
			<CategorieHeader categorieTitle={categorie} />
			<main>
				{orderedProducts?.length > 0 && (
					<>
						<Filters sectionName={params} productTypes={productTypesList} />
						<ListOfProducts
							products={orderedProducts}
							subCategorie={subCategorie}
							handleShowMoreProducts={handleShowMoreProducts}
						/>
					</>
				)}

				{loading && <Loader />}

				{!loading && orderedProducts && (
					<section className={styles.buttonWrapper}>
						<button
							className={styles.btnShowMoreProducts}
							onClick={handleShowMoreProducts}
						>
							Mostrar más productos
						</button>
					</section>
				)}
				
				{!loading && orderedProducts?.length === 0 && (
					<section className={styles.noResults}>
						<h2 className={styles.titleNoResults}>
							No hay resultados para esta búsqueda
						</h2>
					</section>
				)}
			</main>
		</>
	)
}

export default ProductTypeList
