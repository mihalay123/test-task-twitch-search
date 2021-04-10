import React from 'react'

import styles from '../css/Home.module.css'
import TextField from './TextField'
import Button from './Button'
import { useRouter } from 'next/router'

import { getVideoData } from '../pages/api/twitch'

export default function Header(props) {
	const {
		setSearchLine,
		setPage,
		setSearchButtonClicked,
		showFavoriteButton,
		searchLine,
	} = props
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

	const onKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault()
			event.stopPropagation()
			onSearchButton()
		}
	}

	return (
		<div className={styles.header}>
			<TextField
				handler={handleFields}
				style={styles['header-text-field']}
				placeholder="Введите название канала"
				onKeyDown={onKeyDown}
				value={searchLine}
			/>
			<Button
				text="Поиск"
				onClickFunction={onSearchButton}
				style={styles['header-button']}
			/>
			{showFavoriteButton ? (
				<Button
					text="Избранное"
					onClickFunction={onFavoritesButton}
					style={styles['header-button']}
				></Button>
			) : (
				<div></div>
			)}
		</div>
	)
}
