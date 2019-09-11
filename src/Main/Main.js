import React from 'react';
import Note from './Note/Note';

function findMatchingNotes(props) {
    const filteredNotes = (props.currentFolderSelected ? 
              props.notes.filter( note => note.folderId === props.currentFolderSelected ) 
              : props.notes);
    return filteredNotes;
}

export default function Main(props) {
  let showData = '';
  if (!props.noteSelected) {
    const useFilteredNotes = findMatchingNotes(props);
    showData = useFilteredNotes.map((note, index) => <Note key={index} {...note} handleNoteClicked={props.handleNoteClicked} noteSelected={props.noteSelected}/>)
  }
  else {
    let foundNote = props.notes.find(note => note.id === props.noteSelected);
    showData = <Note key={props.noteSelected} {...foundNote} handleNoteClicked={props.handleNoteClicked} noteSelected={props.noteSelected}/>
  }
  
  return (
    <ul>
      {showData}
    </ul>
  )
}
