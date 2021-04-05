import Head from 'next/head'
import Link from 'next/link'
import styles from '../css/Home.module.css'
import { useState } from 'react'

import Header from '../components/Header'

export default function Home() {
	const [videoList, setVideolList] = useState([])

	const onButtonClick = () => {
		//onSearch('')
	}

	const onLoginClick = () => {
		getVideoData(setChannelList, 'jeensoff')
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Twitch Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header style={styles.header} videoList={setVideolList}></Header>

			<main className={styles.main}>
				{channelList.map()}
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
