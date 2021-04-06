import { useRouter } from 'next/router'
import Button from '../components/Button'

export default function Favorites(props) {
	const router = useRouter()

	const onClickButton = () => {
		router.push('/')
	}

	return (
		<div>
			<h1>Избранное</h1>

			<Button text="Вернуться к поиску" onClickFunction={onClickButton} />
		</div>
	)
}
