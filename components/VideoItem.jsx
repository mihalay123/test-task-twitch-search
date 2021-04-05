export default function VideoCard({ videoParams }) {
	const imgURL = videoParams.thumbnail_url
		.replace('%{width}', 200)
		.replace('%{height}', 100)

	return (
		<div>
			<a href={videoParams.url}>
				<img src={imgURL} alt={videoParams.title} />
			</a>
		</div>
	)
}
