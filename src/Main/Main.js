import React from 'react';
import Note from './Note/Note';

export default function Main(props) {
  return (
    <ul>
      {props.notes.map(note => <Note {...note} />)}
    </ul>
  )
}
