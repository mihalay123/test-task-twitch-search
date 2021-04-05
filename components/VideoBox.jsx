import _ from 'lodash'

import VideoItem from './VideoItem'

const ITEMS_IN_ROW = 4

const addEmptyBlocks = (number) => {}

export default function VideoBox({ videoList, styles }) {
	const emptyBlocks = videoList.length % ITEMS_IN_ROW

	console.log(emptyBlocks)
	const emptyBlocksArr = [...Array(emptyBlocks).keys()]
	console.log(emptyBlocksArr)
	const chunkedVideoList = _.chunk(videoList, ITEMS_IN_ROW)
	console.log(chunkedVideoList)
	return (
		<div className={styles['video-box']}>
			{chunkedVideoList.map((row, index) => (
				<div key={index} className={styles['video-box-row']}>
					{chunkedVideoList[index].map((videoObj) => (
						<VideoItem
							videoParams={videoObj}
							key={videoObj.id}
							style={styles['video-box-item']}
						/>
					))}
					{emptyBlocksArr.map((current, index) => (
						<div style={styles['video-box-item-empty']} key={index}></div>
					))}
				</div>
			))}
		</div>
	)
}
