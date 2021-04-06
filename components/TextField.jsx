import React from 'react'

export default function TextField({ handler }) {
	return (
		<div>
			<input onChange={handler}></input>
		</div>
	)
}
