import _ from 'lodash'

import VideoItem from './VideoItem'
import { ITEMS_PER_PAGE } from '../constants/videoConstants'

export default function VideoBox({ videoList = [], styles }) {
	const emptyBlocks =
		videoList.length === 0 ? 0 : ITEMS_PER_PAGE - videoList.length

	console.log('num of video on the page', videoList.length)
	console.log('num of empty blocks', emptyBlocks)
	const emptyBlocksArr = [...Array(emptyBlocks).keys()]

	return (
		<div className={styles['video-box']}>
			{videoList.map((videoObj) => (
				<VideoItem
					videoParams={videoObj}
					key={videoObj.id}
					style={styles['video-box-item']}
				/>
			))}
			{emptyBlocksArr.map((current, index) => (
				<div className={styles['video-box-item-empty']} key={index}></div>
			))}
		</div>
	)
}
