import Button from './Button'
import Image from 'next/image'

import styles from '../css/Home.module.css'
import ArrowLeftIcon from '../assets/images/arrow-left.svg' //stealed from twich html
import ArrowRightIcon from '../assets/images/arrow-right.svg'

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
				onClickFunction={previousPage}
				style={styles['button-pagination']}
			>
				<ArrowLeftIcon />
			</Button>
			<Button onClickFunction={nextPage} style={styles['button-pagination']}>
				<ArrowRightIcon />
			</Button>
		</div>
	)
}
