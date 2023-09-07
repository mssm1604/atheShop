'use client'

import { useRef, useState } from 'react'
import styles from './Filters.module.css'
import { ArrowRight, Check } from '@/components/icons/Icons'
import { useFilters } from '@/hooks/useFilters'

export function ProductypeOptions({ productTypes }) {
	const { filters, setFilters } = useFilters()
	const [productTypeOptions, setProductTypeOptions] = useState(
		filters?.productType
	)

	const emptySearch = useRef(true)

	const handleOptionClick = e => {
		const parentE = e.target.parentElement
		const parentElValue = e.target.parentElement.id

		const ifItemSelected = parentE.getAttribute('data-selected')

		if (ifItemSelected == 'true') {
			parentE.setAttribute('data-selected', false)

			const filterdOptions = productTypeOptions?.filter(
				prevValue => prevValue !== parentElValue
			)

			setProductTypeOptions(() =>
				filterdOptions.length <= 0 ? 'all' : filterdOptions
			)
		} else {
			parentE.setAttribute('data-selected', true)
			setProductTypeOptions(prevState =>
				prevState !== 'all' ? [...prevState, parentElValue] : [parentElValue]
			)
		}
	}

	const handleApplyChanges = () => {
		productTypeOptions === 'all' && filters.productType === 'all'
			? (emptySearch.current = true)
			: (emptySearch.current = false)

		if (emptySearch.current) return

		setFilters(prevState => ({
			...prevState,
			productType: productTypeOptions
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
					</section>
				</div>
				<div className={`${styles.flexRow} ${styles.buttonsWrapper}`}>
					<button
						className={styles.btnApplyChanges}
						onClick={handleApplyChanges}
					>
						Aplicar cambios
					</button>
				</div>
			</section>
		</div>
	)
}
