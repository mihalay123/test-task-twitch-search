const getFavoriteList = () =>
	JSON.parse(localStorage.getItem('favoriteVids')) || []

const addFavorite = (id, setFavorite) => {
	const previousFavorite = getFavoriteList()

	const dataToSend = [...previousFavorite, id]
	console.log(JSON.stringify(dataToSend))
	localStorage.setItem('favoriteVids', JSON.stringify(dataToSend))
	setFavorite(true)
}

const removeFavorite = (id, setFavorite) => {
	const previousFavorite = getFavoriteList()

	const dataToSend = previousFavorite.filter((item) => item !== id)
	localStorage.setItem('favoriteVids', JSON.stringify(dataToSend))
	setFavorite(false)
}

export { addFavorite, removeFavorite, getFavoriteList }
