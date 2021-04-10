import React from 'react'

export default function TextField({
	handler,
	style,
	placeholder,
	onKeyDown,
	value,
}) {
	return (
		<input
			onChange={handler}
			className={style}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
			value={value}
		></input>
	)
}
