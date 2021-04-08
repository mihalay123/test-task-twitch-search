import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from '../css/Home.module.css'
import Header from '../components/Header'
import VideoBox from '../components/VideoBox'
import Pagination from '../components/Pagination'

import { getVideoDataByChannelName } from './api/twitch'

export default function Home() {
	const [videoList, setVideoList] = useState([])
	const [cursor, setCursor] = useState('')
	const [page, setPage] = useState({ value: 1 })
	const [searchLine, setSearchLine] = useState('')
	const [isSearchButtonClicked, setSearchButtonClicked] = useState(false)

	useEffect(() => {
		getVideoDataByChannelName({
			setVideoList,
			setCursor,
			cursor,
			page,
			channelName: searchLine,
		})
		setSearchButtonClicked(false)
	}, [page, isSearchButtonClicked])

	return (
		<div className={styles.container}>
			<Head>
				<title>Twitch Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				setSearchLine={setSearchLine}
				setPage={setPage}
				setSearchButtonClicked={setSearchButtonClicked}
			></Header>

			<VideoBox videoList={videoList} />
			<Pagination setPage={setPage} />
		</div>
	)
}
