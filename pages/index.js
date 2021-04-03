import Head from 'next/head'
import Link from 'next/link'
import styles from '../css/Home.module.css'
import { useState } from 'react'

import Header from '../components/Header'

export default function Home() {
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
		<div className={styles.container}>
			<Head>
				<title>Twitch Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header style={styles.header}></Header>

			<main className={styles.main}></main>
		</div>
	)
}
