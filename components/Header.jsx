import { useState } from 'react'

import TextField from './TextField'
import Button from './Button'

import { getVideoData } from '../pages/api/twitch'

export default function Header(props) {
	const { setVideoList, style } = props
	const [searchLine, setSearchLine] = useState('')

	const onSearchButton = () => {
		alert(`${searchLine}\nyou pressed search button`)
		getVideoData(setVideoList, searchLine)
	}

	const onFavoritesButton = () => {
		alert(`you pressed favorites button`)
	}

	const handleFields = (event) => {
		setSearchLine(event.target.value)
	}

	return (
		<div className={style}>
			<TextField text="Название канала" handler={handleFields} />
			<Button text="Search" onClickFunction={onSearchButton} />
			<Button text="Favorites" onClickFunction={onFavoritesButton} />
		</div>
	)
}
