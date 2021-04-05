export default function VideoCard({ videoParams, style }) {
	const imgURL = videoParams.thumbnail_url
		.replace('%{width}', 200)
		.replace('%{height}', 100)

	return (
		<div className={style}>
			<a href={videoParams.url}>
				<img src={imgURL} alt={videoParams.title} />
			</a>
		</div>
	)
}
