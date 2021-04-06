import { useState } from 'react'

import styles from '../css/Home.module.css'
import TextField from './TextField'
import Button from './Button'
import { useRouter } from 'next/router'

import { getVideoData } from '../pages/api/twitch'
import Link from 'next/link'

export default function Header(props) {
	const { setSearchLine, setPage } = props
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
			<Button text="Search" onClickFunction={onSearchButton} />
			<Button text="Favorites" onClickFunction={onFavoritesButton} />
		</div>
	)
}
