import Image from 'next/image'
import { Edit2, HeartIcon, Trash } from '../icons/Icons'
import styles from './itemsInCart.module.css'

export function ItemsInCart({ cart, deleteFromCart, setProductIdToEdit }) {
	return cart.map(
		({ id, prodName, prodType, price, quantity, size, imageToUse }) => (
			<article key={id} className={styles.itemCardWrapper}>
				<picture className={styles.imageWrapper}>
					<Image
						fill
						src={imageToUse}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						alt="primera foto del sumario de fotos del producto de hombres"
						className={styles.img}
					/>
				</picture>

				<section className={styles.infoWrapper}>
					<div className={styles.generalDescription}>
						<div className={styles.prdName}>
							<h3>{prodName}</h3>
							<span>{prodType}</span>
						</div>
						<div className={styles.sizeQt}>
							<div className={styles.size}>
								<div>
									<span>Talla: {size}</span>
								</div>
							</div>
							<div className={styles.quantity}>
								<span>Cantidad: {quantity}</span>
							</div>
						</div>
					</div>
					<div className={styles.prices}>
						<h4>
							$<span>{price}</span>
						</h4>
						<h3>
							$<span>{price * quantity}</span>
						</h3>
					</div>
				</section>

				<div className={styles.actionButtonsWrapper}>
					<ul className={styles.btnList}>
						<li>
							<HeartIcon />
						</li>
						<li onClick={() => setProductIdToEdit(id)}>
							<Edit2 />
						</li>
						<li onClick={() => deleteFromCart(id)}>
							<Trash />
						</li>
					</ul>
				</div>
			</article>
		)
	)
}
