import styles from './Filters.module.css'
import { Close, Filter } from '@/components/icons/Icons'
import { Selections } from './Selections'
import { ProductypeOptions } from './ProductTypeOptions'
import { OrderBySection } from './OrderBySection'

function Filters({ sectionName, productTypes }) {
	
	const handleShowFiltersSection = () => {
	}

	return (
		<section className={`${styles.flexRow} ${styles.filtersBar}`}>
			<div className={styles.sectionName}>
				<h4>{`${sectionName?.subCategorie} para ${sectionName?.categorie}`}</h4>
			</div>

			<div
				data-visible="false"
				className={`${styles.flexRow} ${styles.filtersAndSelections}`}
			>
				<header className={`${styles.headerFiltersSection}`}>
					<h2>Filtros</h2>

					<span>
						<Close />
					</span>
				</header>
				<div className={`${styles.flexRow} ${styles.filters}`}>
					<ProductypeOptions productTypes={productTypes} />
					<OrderBySection />
				</div>

				<div className={`${styles.flexRow}  ${styles.selections}`}>
					<Selections />
				</div>
			</div>

			<div className={styles.filtersButtonWrapper}>
				<button
					onClick={handleShowFiltersSection}
					className={`${styles.flexRow} ${styles.button}`}
				>
					Filtros
					<span>
						<Filter />
					</span>
				</button>
			</div>
		</section>
	)
}

export { Filters }
