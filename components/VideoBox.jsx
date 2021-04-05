import _ from 'lodash'

import VideoItem from './VideoItem'
import { ITEMS_PER_PAGE, ITEMS_IN_ROW } from '../constants/videoConstants'

const addEmptyBlocks = (number) => {}

// export default function VideoBox({ videoList = [], styles }) {
// 	const emptyBlocks = ITEMS_PER_PAGE % videoList.length || 0

// 	console.log('HAHDHASHD', emptyBlocks)
// 	const emptyBlocksArr = [...Array(emptyBlocks).keys()]
// 	//const emptyBlocksArr = [1, 2]
// 	console.log(emptyBlocksArr)
// 	const chunkedVideoList = _.chunk(videoList, ITEMS_IN_ROW)
// 	console.log(chunkedVideoList)
// 	return (
// 		<div className={styles['video-box']}>
// 			{chunkedVideoList.map((row, index) => (
// 				<div key={index} className={styles['video-box-row']}>
// 					{row.map((videoObj) => (
// 						<VideoItem
// 							videoParams={videoObj}
// 							key={videoObj.id}
// 							style={styles['video-box-item']}
// 						/>
// 					))}
// 				</div>
// 			))}
// 			{emptyBlocksArr.map((current, index) => (
// 				<div className={styles['video-box-item-empty']} key={index}></div>
// 			))}
// 		</div>
// 	)
// }

export default function VideoBox({ videoList = [], styles }) {
	const emptyBlocks = ITEMS_PER_PAGE % videoList.length || 0

	console.log('HAHDHASHD', emptyBlocks)
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
