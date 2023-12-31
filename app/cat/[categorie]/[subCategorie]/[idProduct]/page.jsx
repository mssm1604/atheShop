'use client'

import styles from './productView.module.css'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Slider } from '@/components/cat/productType/idProduct/Slider'
import { ProductInfo } from '@/components/cat/productType/idProduct/ProductInfo'
import { useEffect, useState } from 'react'
import { getProducts } from '@/services/getProducts'

function useGetItem(params) {
	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		getProducts({ params })
			.then(({ formatedData }) => setProduct(formatedData[0]))
			.finally(() => setLoading(false))
	}, [])

	return { product, loading }
}

function ProductView({ params }) {
	const { product, loading } = useGetItem(params)
	return (
		<>
			<Header headType={'productsView'} />
			<div className={styles.pageWrapper}>
				<main className={styles.mainInfoWrapper}>
					<section className={styles.productPictures}>
						<ul>
							{product?.images?.map((image, index) => (
								<li key={index}>
									<Image
										fill
										src={image}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										alt={`Foto del sumario de fotos del producto de ${params.subCategorie} para ${params.categorie}`}
									/>
								</li>
							))}
						</ul>
					</section>

					<Slider carouselImages={product?.images} />

					<ProductInfo
						loading={loading}
						product={product ? product : ''}
						ifProductInCartId={params.idProduct}
					/>
				</main>

				<section className={styles.productDescription}>
					<div className={styles.description}>
						<p>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y
							archivos de texto. Lorem Ipsum ha sido el texto de relleno
							estándar de las industrias desde el año 1500, cuando un impresor
							N. del T. persona que Lorem Ipsum es simplemente el texto de
							relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
							el texto de relleno estándar de las industrias desde el año 1500,
							cuando un impresor N. del T. persona que
						</p>
					</div>

					<div className={styles.details}>
						<h3> Detalles del producto</h3>
						<ul className={styles.detailsList}>
							<li>100% algodón</li>
							<li>Cuello redondo</li>
							<li>Slim fit</li>
							<li>Logo clásico</li>
						</ul>
					</div>
				</section>
				{/*  */}
			</div>
		</>
	)
}

export default ProductView
