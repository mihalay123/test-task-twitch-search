import axios from 'axios'

const TWITCH_CLIENT_ID = 'bfk90li6afywwh5ik7uldi6vgc7jdk' //temp
const TWITCH_CLIENT_SECRET = 'rh1ihn7halpl3y57m0ennmoya1v13c'
const TWITCH_ACCESS_TOKEN = 'Bearer pjq1pxeff0vfg2mq0kaz8idm3x8r74'

const getChannelID = (channelName) => {
	return (
		axios
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
				console.log(result.data.data[0].id)
				//return new Promise((resolve) => resolve(result.data.data[0].id))
				return result.data.data[0].id
			})
			//.then((result) => console.log('second', result))
			.catch((err) => console.log(err))
	)
}

export const getVideoData = async (setChannelList, channelName) => {
	try {
		const channelID = await getChannelID(channelName) //.catch((err) => alert(err))
		if (channelID === undefined)
			throw new Error('Канал не существует. Повторите попытку.')
		axios
			.get('https://api.twitch.tv/helix/videos', {
				params: {
					user_id: channelID,
				},
				headers: {
					'Client-ID': TWITCH_CLIENT_ID,
					Authorization: TWITCH_ACCESS_TOKEN,
				},
			})
			.then((response) => {
				response.data.data.map((current) => console.log(current.title))
				setChannelList(response.data.data)
			})
			.catch((err) => console.log(err))
	} catch (err) {
		if (err.name === 'Error') alert(err.name)
	}
}
