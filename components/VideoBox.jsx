import _ from 'lodash'

import styles from '../css/Home.module.css'
import VideoItem from './VideoItem'
import { ITEMS_PER_PAGE } from '../constants/videoConstants'

export default function VideoBox(props) {
	const { videoList = [] } = props
	const emptyBlocks =
		videoList.length === 0 ? 0 : ITEMS_PER_PAGE - videoList.length

	const emptyBlocksArr = [...Array(emptyBlocks).keys()]

	return (
		<div className={styles['video-box']}>
			{videoList.map((videoObj) => (
				<VideoItem videoParams={videoObj} key={videoObj.id} />
			))}
		</div>
	)
}
