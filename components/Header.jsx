import { useState } from 'react'

import TextField from './TextField'
import Button from './Button'

export default function Header(props) {
	const [searchLine, setSearchLine] = useState('')

	const onSearchButton = () => {
		alert(`${searchLine}\nyou pressed search button`)
	}

	const onFavoritesButton = () => {
		alert(`you pressed favorites button`)
	}

	const handleFields = (event) => {
		setSearchLine(event.target.value)
		console.log(searchLine)
	}

	return (
		<div className={props.style}>
			<TextField text="Название канала" handler={handleFields} />
			<Button text="Search" onClickFunction={onSearchButton} />
			<Button text="Favorites" onClickFunction={onFavoritesButton} />
		</div>
	)
}
