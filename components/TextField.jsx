import React from 'react'

export default function TextField({ handler, style, placeholder }) {
	return (
		<input
			onChange={handler}
			className={style}
			placeholder={placeholder}
		></input>
	)
}
