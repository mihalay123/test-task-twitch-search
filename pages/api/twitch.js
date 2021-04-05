import axios from 'axios'

import { ITEMS_PER_PAGE } from '../../constants/videoConstants'

const TWITCH_CLIENT_ID = 'bfk90li6afywwh5ik7uldi6vgc7jdk' //temp
const TWITCH_CLIENT_SECRET = 'rh1ihn7halpl3y57m0ennmoya1v13c'
const TWITCH_ACCESS_TOKEN = 'Bearer pjq1pxeff0vfg2mq0kaz8idm3x8r74'

const getChannelID = (channelName) => {
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

export const getVideoData = async (setVideolList, setCursor, channelName) => {
	try {
		const channelID = await getChannelID(channelName)
		if (channelID === undefined)
			throw new Error('Канал не существует. Повторите попытку.')
		axios
			.get('https://api.twitch.tv/helix/videos', {
				params: {
					user_id: channelID,
					first: ITEMS_PER_PAGE,
				},
				headers: {
					'Client-ID': TWITCH_CLIENT_ID,
					Authorization: TWITCH_ACCESS_TOKEN,
				},
			})
			.then((response) => {
				setCursor(response.data.pagination.cursor)
				setVideolList(response.data.data)
			})
			.catch((err) => console.log(err))
	} catch (err) {
		if (err.name === 'Error') alert(err)
	}
}
