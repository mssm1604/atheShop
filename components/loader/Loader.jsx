import styles from './loader.module.css'

export function Loader() {
	return (
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
	)
}
