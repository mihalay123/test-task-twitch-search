import axios from 'axios'

import { ITEMS_PER_PAGE } from '../../constants/videoConstants'
import { getFavoriteList } from './favorutesApi'

//Must be in the process.env. But for convenience, I left it like this for now
const TWITCH_CLIENT_ID = 'bfk90li6afywwh5ik7uldi6vgc7jdk'
const TWITCH_ACCESS_TOKEN = 'Bearer pjq1pxeff0vfg2mq0kaz8idm3x8r74'

const getChannelID = (channelName = '') => {
	return axios
		.get('https://api.twitch.tv/helix/users', {
			params: {
				login: channelName,
			},
			headers: {
				'Client-ID': TWITCH_CLIENT_ID,
				Authorization: TWITCH_ACCESS_TOKEN,
			},
		})
		.then((result) => {
			return result.data.data[0].id
		})
		.catch((err) => console.log(err))
}

export const getVideoDataByChannelName = async ({
	setVideoList,
	setCursor,
	cursor,
	page,
	channelName,
}) => {
	try {
		const channelID = await getChannelID(channelName)
		if (channelID === undefined)
			throw new Error('Канал не существует. Повторите попытку.')
		axios
			.get('https://api.twitch.tv/helix/videos', {
				params: {
					user_id: channelID,
					first: ITEMS_PER_PAGE,
					[page.dirrection]: cursor,
				},
				headers: {
					'Client-ID': TWITCH_CLIENT_ID,
					Authorization: TWITCH_ACCESS_TOKEN,
				},
			})
			.then((response) => {
				setCursor(response.data.pagination.cursor)
				setVideoList(response.data.data)
			})
			.catch((err) => console.log(err))
	} catch (err) {
		if (err.name === 'Error') console.log(err)
	}
}

export const getVideoDataByVideoId = (setVideoList) => {
	const idList = getFavoriteList()
	const idsString = idList.join(',')

	axios
		.get('https://api.twitch.tv/helix/videos', {
			params: {
				id: idsString,
			},
			headers: {
				'Client-ID': TWITCH_CLIENT_ID,
				Authorization: TWITCH_ACCESS_TOKEN,
			},
		})
		.then((response) => {
			setVideoList(response.data.data)
		})
}
