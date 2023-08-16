import { useFilters } from '@/hooks/useFilters'
import styles from './Filters.module.css'
import { ArrowRight } from '@/components/icons/Icons'

export function OrderBySection() {
	const { filters, setFilters } = useFilters()

	const handleOrderByClick = e => {
		const valueToSet = e.target.id
		setFilters(prevState => ({ ...prevState, orderBy: valueToSet }))
	}

	return (
		<div
			className={`${styles.groupWrapper} ${styles.orderBy}`}
		>
			<button
				name="orderBySection"
				className={`${styles.flexRow} ${styles.filterButton}`}
			>
				<div style={{ pointerEvents: 'none' }}>
					Ordenar por
					<span className={styles.selectedOptionSpan}>
						{filters?.orderBy !== 'none' &&
							` ${
								filters?.orderBy == 'low-high'
									? 'precio bajo - alto'
									: 'precio alto - bajo'
							}`}
					</span>
				</div>
				<span>
					<ArrowRight />
				</span>
			</button>

			<section
				id="orderBySection"
				className={`${styles.sectionToShow} ${styles.orderByOptionsWrapper}`}
			>
				<div className={styles.orderByOptions}>
					<ul
						onClick={handleOrderByClick}
						className={`${styles.flexColumn} ${styles.orderByList}`}
					>
						<li id="low-high">Precio bajo - alto</li>
						<li id="high-low">Precio alto - bajo</li>
					</ul>
				</div>
			</section>
		</div>
	)
}
