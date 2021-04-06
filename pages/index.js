import Head from 'next/head'
import Link from 'next/link'
import styles from '../css/Home.module.css'
import { useState, useEffect } from 'react'

import Header from '../components/Header'
import VideoBox from '../components/VideoBox'
import Pagination from '../components/Pagination'

import { getVideoData } from './api/twitch'

export default function Home() {
	const [videoList, setVideolList] = useState([])
	const [cursor, setCursor] = useState('')
	const [page, setPage] = useState({ value: 1 })
	const [searchLine, setSearchLine] = useState('')

	useEffect(() => {
		getVideoData({
			setVideolList,
			setCursor,
			cursor,
			page,
			channelName: searchLine,
		})
	}, [page, searchLine])

	return (
		<div className={styles.container}>
			<Head>
				<title>Twitch Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				styles={styles}
				setSearchLine={setSearchLine}
				setPage={setPage}
			></Header>

			<main className={styles.main}>
				<VideoBox videoList={videoList} styles={styles} />
				<Pagination setPage={setPage} styles={styles} />
				<img
					width="100px"
					height="100"
					src="https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/d06d40fff2b26ee4ae1a_buster_41268766541_1617381403//thumb/thumb0-1000x1000.jpg"
					alt="img"
				></img>
			</main>
		</div>
	)
}
