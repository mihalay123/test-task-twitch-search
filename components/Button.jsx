import React from 'react'

export default function Button({ onClickFunction, text }) {
	return (
		<div>
			<button onClick={onClickFunction}>{text}</button>
		</div>
	)
}
