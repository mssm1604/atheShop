import styles from './productType.module.css'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard({ product, subCategorie }) {
	const { id, prodName, price, images } = product

	return (
		<article className={styles.articleProduct}>
			<Link href={`${subCategorie}/${id}`}>
				<div className={styles.imgWrapper}>
					<picture>
						<Image
							fill
							src={images[0]}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt={prodName}
							className={styles.productImage}
						/>
					</picture>

					<picture>
						<Image
							fill
							src={images[1]}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt={`second image of the product ${prodName}`}
							className={styles.productImageOnHover}
						/>
					</picture>
				</div>

				<footer className={styles.productFooter}>
					<div>
						<h4>{prodName}</h4>
					</div>
					<div>
						<span>
							{Number(price).toLocaleString('es-US', {
								style: 'currency',
								currency: 'COP',
								roundingPriority: 'morePrecision',
							})}
						</span>
					</div>
				</footer>
			</Link>
		</article>
	)
}

export { ProductCard }
