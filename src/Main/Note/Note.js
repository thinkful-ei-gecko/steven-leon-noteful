import React from 'react'

export default function Note(props) {
  return (
    <li key={props.id} onClick={() => props.handleNoteClicked(props.id)}>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      {(props.noteSelected && <p>{props.content}</p>)}
    </li>
  )
}
