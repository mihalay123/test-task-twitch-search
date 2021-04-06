import { useState } from 'react'

import styles from '../css/Home.module.css'

export default function VideoItem(props) {
	const { videoParams, style } = props

	const [isFavorite, setIsFavorite] = useState(false)

	const height = 150

	const imgURL = videoParams.thumbnail_url
		.replace('%{width}', height * 1.8)
		.replace('%{height}', height)

	return (
		<div className={style}>
			<a href={videoParams.url}>
				<img src={imgURL} alt={videoParams.title} />
			</a>
		</div>
	)
}
