import { useState } from 'react'

import styles from '../css/Home.module.css'
import TextField from './TextField'
import Button from './Button'
import { useRouter } from 'next/router'

import { getVideoData } from '../pages/api/twitch'
import Link from 'next/link'

export default function Header(props) {
	const { setSearchLine, setPage, setSearchButtonClicked } = props
	const router = useRouter()

	const onSearchButton = () => {
		setSearchButtonClicked(true)
		setPage({ value: 1, dirrection: '' })
	}

	const onFavoritesButton = () => {
		router.push('/favorites')
	}

	const handleFields = (event) => {
		setSearchLine(event.target.value)
	}

	return (
		<div className={styles.header}>
			<p className={styles['header-text-field-label']}>
				Введите название канала
			</p>
			<TextField handler={handleFields} style={styles['header-text-field']} />
			<Button
				text="Поиск"
				onClickFunction={onSearchButton}
				style={styles['header-button']}
			/>
			<Button
				text="Избранное"
				onClickFunction={onFavoritesButton}
				style={styles['header-button']}
			/>
		</div>
	)
}
