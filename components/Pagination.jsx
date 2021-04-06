import Button from './Button'

export default function Pagination(props) {
	const { setPage, styles } = props

	const nextPage = () => {
		setPage(({ value }) => ({ value: value + 1, dirrection: 'after' }))
	}

	const previousPage = () => {
		setPage(({ value }) => ({ value: value - 1, dirrection: 'before' }))
	}

	return (
		<div className={styles.pagination}>
			<Button text="<" onClickFunction={previousPage} />
			<Button text=">" onClickFunction={nextPage} />
		</div>
	)
}
