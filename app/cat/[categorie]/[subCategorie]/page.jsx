'use client'

import { CategorieHeader } from '@/components/cat/categorie/CategorieHeader'
import { ListOfProducts } from '@/components/cat/productType/ListOfProducts'
import { Filters } from '@/components/cat/productType/filters/Filters'
import { Header } from '@/components/header/Header'
import { useProductsList } from '@/hooks/useProductsList'
import styles from './ropa.module.css'

function ProductTypeList({ params }) {
	const { categorie, subCategorie } = params
	const { products, productTypesList, orderedProducts, loading } =
		useProductsList({ params })

	return (
		<>
			<Header headType={'mainView'} />
			<CategorieHeader categorieTitle={categorie} />
			<main>
				{products?.length > 0 && (
					<>
						<Filters sectionName={params} productTypes={productTypesList} />
						<ListOfProducts
							products={!orderedProducts ? products : orderedProducts}
							subCategorie={subCategorie}
						/>
					</>
				)}

				{loading && (
					<section className={styles.loaderWrapper}>
						<div className={styles['sk-chase']}>
							<span className={styles['sk-chase-dot']}></span>
							<span className={styles['sk-chase-dot']}></span>
							<span className={styles['sk-chase-dot']}></span>
							<span className={styles['sk-chase-dot']}></span>
							<span className={styles['sk-chase-dot']}></span>
							<span className={styles['sk-chase-dot']}></span>
						</div>
					</section>
				)}

				{!loading && products?.length === 0 && (
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
