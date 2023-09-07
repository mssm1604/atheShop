'use client'

import { CategorieHeader } from '@/components/cat/categorie/CategorieHeader'
import { ListOfProducts } from '@/components/cat/productType/ListOfProducts'
import { Filters } from '@/components/cat/productType/filters/Filters'
import { Header } from '@/components/header/Header'
import { useProductsList } from '@/hooks/useProductsList'
import styles from './productsList.module.css'
import { Loader } from '@/components/loader/Loader'
import { useState } from 'react'
import { ArrowLeft } from '@/components/icons/Icons'

function ProductTypeList({ params }) {
	const [numberProducts, setNumberProducts] = useState(4)
	const { categorie, subCategorie } = params
	const { orderedProducts, productTypes, totalProducts, loading } =
		useProductsList({
			params,
			numberProducts
		})

	const handleShowMoreProducts = () => {
		setNumberProducts(prevValue => prevValue + 4)
	}

	const totaCurrentProducts = orderedProducts?.length

	return (
		<>
			<Header headType={'mainView'} />
			<CategorieHeader categorieTitle={categorie} />
			<main>
				{orderedProducts?.length > 0 && (
					<>
						<Filters sectionName={params} productTypes={productTypes} />
						<ListOfProducts
							products={orderedProducts}
							subCategorie={subCategorie}
							handleShowMoreProducts={handleShowMoreProducts}
						/>
					</>
				)}

				{loading && <Loader />}

				{!loading && orderedProducts?.length > 0 && (
					<section className={styles.buttonWrapper}>
						{totaCurrentProducts === totalProducts ? (
							<div className={styles.seenAllProductsWrapper}>
								<span className={styles.totalProducts}>
									Usted vió {totaCurrentProducts} productos
								</span>
								<a
									href="#filters"
									className={`${styles.btnLocalStyle} ${styles.btnSeenAllProducts} `}
								>
									Volver a arriba
									<span>
										<ArrowLeft />
									</span>
								</a>
							</div>
						) : (
							<button
								className={`${styles.btnLocalStyle} ${styles.btnShowMoreProducts}`}
								onClick={handleShowMoreProducts}
							>
								Mostrar más productos
							</button>
						)}
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
