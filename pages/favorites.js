import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Button from '../components/Button'
import VideoBox from '../components/VideoBox'

import styles from '../css/Home.module.css'
import { getVideoDataByVideoId } from './api/twitch'
import Header from '../components/Header'

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
		<div className={styles.container}>
			<Head>
				<title>Twitch Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles['header']}>
				<h1 className={styles['header-label']}>Избранное</h1>
				<Button
					text="Вернуться к поиску"
					onClickFunction={onClickButton}
					style={styles['header-button']}
				/>
			</div>

			<div className={styles.main}>
				<VideoBox videoList={videoList} />
			</div>
		</div>
	)
}
