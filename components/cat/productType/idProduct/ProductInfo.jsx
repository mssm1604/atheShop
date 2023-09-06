'use client'

import { useState } from 'react'
import styles from './productInfo.module.css'
import { InputSelect } from './productInfo/InputSelect'
import { useAddProducts } from '@/hooks/useAddProducts'
import { IfProductInCartSection } from './productInfo/IfProductInCart'

export function ProductInfo({ loading, product, ifProductInCartId }) {
	const { id, prodName, prodType, price, images } = product
	const [size, setSize] = useState(null)
	const [quantity, setQuantity] = useState(null)

	const sizes = ['XS', 'S', 'M', 'L', 'XL']
	const quantities = [1, 2, 3, 4]

	const { productInCartIndex, onClickAddToCart } = useAddProducts({
		ifProductInCartId
	})

	const checkIfNotSelected = () => {
		!size && setSize('error')
		!quantity && setQuantity('error')
	}

	const handleAddToCart = () => {
		checkIfNotSelected()
		if (!size || !quantity || size === 'error' || quantity === 'error') return
		onClickAddToCart({ id, prodName, prodType, price, images, quantity, size })
	}

	return (
		<section className={styles.productInfo}>
			{/*  */}
			<div className={styles.stickyWrapper}>
				<section className={styles.titleAndPrice}>
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
					{!loading && product && (
						<article>
							<div className={styles.titleWrapper}>
								<h4>{prodName}</h4>
								<p>{prodType}</p>
							</div>
							<div className={styles.priceWrapper}>
								<span>
									{Number(price).toLocaleString('es-US', {
										style: 'currency',
										currency: 'COP',
										roundingPriority: 'morePrecision'
									})}
								</span>
							</div>
						</article>
					)}
				</section>

				<section className={styles.purchaseContent}>
					{/*  */}
					{!loading &&
						product &&
						(productInCartIndex < 0 ? (
							<>
								<div className={styles.qtSize}>
									<InputSelect
										inputValue={quantity}
										setValue={setQuantity}
										selectName={'cantidad'}
										selectOptions={quantities}
									/>
									<InputSelect
										inputValue={size}
										setValue={setSize}
										selectName={'talla'}
										selectOptions={sizes}
									/>
								</div>

								<div className={styles.buttonsWrapper}>
									<button
										className={`${styles.addToCart}`}
										onClick={handleAddToCart}
									>
										<span className={styles.btnText}>agregar al carrito</span>
									</button>
								</div>
							</>
						) : (
							<IfProductInCartSection
								ifProductInCartId={ifProductInCartId}
								quantity={quantity}
								size={size}
							/>
						))}

					{/*  */}
				</section>
			</div>
		</section>
	)
}
