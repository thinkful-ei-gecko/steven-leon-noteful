import React from 'react'

export default function Note(props) {
  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
    </li>
  )
}
