import React from 'react'

export default function TextField({ handler, style }) {
	return <input onChange={handler} className={style}></input>
}
