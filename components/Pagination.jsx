import Button from './Button'

import styles from '../css/Home.module.css'

export default function Pagination(props) {
	const { setPage } = props

	const nextPage = () => {
		setPage(({ value }) => ({ value: value + 1, dirrection: 'after' }))
	}

	const previousPage = () => {
		setPage(({ value }) => ({ value: value - 1, dirrection: 'before' }))
	}

	return (
		<div className={styles.pagination}>
			<Button
				text="<"
				onClickFunction={previousPage}
				style={styles['button-pagination']}
			/>
			<Button
				text=">"
				onClickFunction={nextPage}
				style={styles['button-pagination']}
			/>
		</div>
	)
}
