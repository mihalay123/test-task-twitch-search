import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import VideoBox from '../components/VideoBox'

import styles from '../css/Home.module.css'
import { getVideoDataByVideoId } from './api/twitch'

export default function Favorites(props) {
	const router = useRouter()
	const [videoList, setVideolList] = useState([])

	const onClickButton = () => {
		router.push('/')
	}

	useEffect(() => {
		getVideoDataByVideoId(setVideolList)
	}, [])

	return (
		<div className={styles.main}>
			<h1>Избранное</h1>
			<Button text="Вернуться к поиску" onClickFunction={onClickButton} />
			<VideoBox videoList={videoList} />
		</div>
	)
}
