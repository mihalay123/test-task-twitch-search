import React from 'react'

export default function Button(props) {
	const { onClickFunction, text, style } = props
	return (
		<button onClick={onClickFunction} className={style}>
			{text}
		</button>
	)
}
