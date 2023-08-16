import { useState } from 'react'
import styles from './Filters.module.css'
import { ArrowRight, Check } from '@/components/icons/Icons'
import { useFilters } from '@/hooks/useFilters'

export function ProductypeOptions({ productTypes }) {
	const [productTypeOptions, setProductTypeOptions] = useState([])
	const { setFilters } = useFilters()

	const handleOptionClick = e => {
		const parentE = e.target.parentElement
		const parentElValue = e.target.parentElement.id

		const ifItemSelected = parentE.getAttribute('data-selected')

		if (ifItemSelected == 'true') {
			parentE.setAttribute('data-selected', false)

			const filterdOptions = productTypeOptions?.filter(
				value => value !== parentElValue
			)

			filterdOptions.length <= 0
				? setProductTypeOptions('all')
				: setProductTypeOptions(filterdOptions)
		} else {
			parentE.setAttribute('data-selected', true)
			setProductTypeOptions(prevState =>
				prevState !== 'all' ? [...prevState, parentElValue] : [parentElValue]
			)
		}
	}

	const handleApplyChanges = () => {
		setFilters(prevState => ({
			...prevState,
			productType: productTypeOptions,
		}))
	}

	const handleClearSelections = () => {
		setFilters(prevState => ({
			...prevState,
			productType: 'all',
		}))
	}
	return (
		<div className={`${styles.groupWrapper}`}>
			<button
				name="productTypeSection"
				className={`${styles.flexRow} ${styles.filterButton}`}
			>
				Filtros{' '}
				<span>
					<ArrowRight />
				</span>
			</button>

			<section
				id="productTypeSection"
				className={`${styles.sectionToShow} ${styles.filtersOptionsWrapper}`}
			>
				<div className={`${styles.flexColumn} ${styles.listOptionsWrapper}`}>
					<section
						className={`${styles.flexColumn} ${styles.listWrapper} ${styles.productTypeList}`}
					>
						<h4>tipo de producto</h4>
						<ul
							onClick={handleOptionClick}
							className={`${styles.flexRow} ${styles.filtersOptions}`}
						>
							{productTypes?.map(({ productType }) => (
								<li key={productType} id={productType} data-selected="false">
									<span className={styles.spanWrapper}>
										<Check />
									</span>
									<span>{productType}</span>
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className={`${styles.flexRow} ${styles.buttonsWrapper}`}>
					<button
						className={styles.btnApplyChanges}
						onClick={handleApplyChanges}
					>
						Aplicar cambios
					</button>

					<button
						className={styles.btnClearSelections}
						onClick={handleClearSelections}
					>
						Quitar selecciones
					</button>
				</div>
			</section>
		</div>
	)
}
