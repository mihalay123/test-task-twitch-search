import React from 'react'

export default function TextField({ handler, text }) {
	return (
		<div>
			<p>{text}</p>
			<input onChange={handler}></input>
		</div>
	)
}
