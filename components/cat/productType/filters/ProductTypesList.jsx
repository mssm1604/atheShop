import { Check } from '@/components/icons/Icons'
import styles from './Filters.module.css'

export function ProductTypesList({ filters, productTypes, handleOptionClick }) {
	return (
		<ul
			onClick={handleOptionClick}
			className={`${styles.flexRow} ${styles.filtersOptions}`}
		>
			{productTypes?.map((productType, index) =>
				filters?.productType.includes(productType) ? (
					<li key={index} id={productType} data-selected="true">
						<span className={styles.spanWrapper}>
							<Check />
						</span>
						<span>{productType}</span>
					</li>
				) : (
					<li key={index} id={productType} data-selected="false">
						<span className={styles.spanWrapper}>
							<Check />
						</span>
						<span>{productType}</span>
					</li>
				)
			)}
		</ul>
	)
}
