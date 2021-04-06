import { useState } from 'react'

import TextField from './TextField'
import Button from './Button'
import { useRouter } from 'next/router'

import { getVideoData } from '../pages/api/twitch'
import Link from 'next/link'

export default function Header(props) {
	const { setSearchLine, setPage, styles } = props
	const [fieldValue, setFieldValue] = useState('')

	const router = useRouter()

	const onSearchButton = () => {
		setSearchLine(fieldValue)
		setPage({ value: 1, dirrection: '' })
	}

	const onFavoritesButton = () => {
		router.push('/favorites')
	}

	const handleFields = (event) => {
		setFieldValue(event.target.value)
	}

	return (
		<div className={styles.header}>
			<p>Введите название канала</p>
			<TextField handler={handleFields} />
			{/* <Link href="/favorites">
				<Button text="Favorites" onClickFunction={onFavoritesButton} />
			</Link> */}
			<Button text="Search" onClickFunction={onSearchButton} />
			<Button text="Favorites" onClickFunction={onFavoritesButton} />
		</div>
	)
}
