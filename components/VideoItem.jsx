import { useState } from 'react'

import styles from '../css/Home.module.css'
import Button from './Button'
import { VIDEO_HEIGHT } from '../constants/videoConstants'
import {
	addFavorite,
	removeFavorite,
	getFavoriteList,
} from '../pages/api/favorutesApi'

export default function VideoItem(props) {
	const { videoParams } = props

	const [isFavorite, setFavorite] = useState(
		getFavoriteList().includes(videoParams.id)
	)
	const buttonText = isFavorite
		? 'Удалить из избранного'
		: 'Добавить в избранное'
	const imgURL = videoParams.thumbnail_url
		.replace('%{width}', VIDEO_HEIGHT * 1.8)
		.replace('%{height}', VIDEO_HEIGHT)

	const onFavoriteButton = () => {
		if (isFavorite) {
			removeFavorite(videoParams.id, setFavorite)
		} else {
			addFavorite(videoParams.id, setFavorite)
		}
	}

	const titleArrayOfWords = videoParams.title.split(' ')
	const prerviewTitle = `${titleArrayOfWords.slice(0, 10).join(' ')}...`

	return (
		<div className={styles['video-box-item']}>
			<a href={videoParams.url}>
				<img src={imgURL} alt="Превью" />
			</a>
			<div className={styles.info}>
				<h3>{prerviewTitle}</h3>
				<Button
					onClickFunction={onFavoriteButton}
					style={styles['button-favorite']}
					text={buttonText}
				/>
			</div>
		</div>
	)
}
