import { ArrowRight } from '@/components/icons/Icons'
import styles from './Filters.module.css'

export function Selections({ selections }) {
	return (
		<div className={`${styles.groupWrapper} ${styles.selectionsWrapper} `}>
			<button
				name="selectionsSection"
				className={`${styles.flexRow} ${styles.filterButton}`}
			>
				Selecciones{' '}
				<span>
					<ArrowRight />
				</span>
			</button>
			<section
				id="selectionsSection"
				className={`${styles.sectionToShow} ${styles.selectionsSummaryWrapper}`}
			>
				<div className={styles.selectionsListWrapper}>
					{selections == 'all' ? (
						<h4>No hay filtros seleccionados</h4>
					) : (
						<>
							<h4>Tipo de producto</h4>
							<ul className={`${styles.flexColumn} ${styles.selectionsList}`}>
								{selections?.map(value => (
									<li key={value}>{value}</li>
								))}
							</ul>
						</>
					)}
				</div>
			</section>
		</div>
	)
}
