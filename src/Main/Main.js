import React from 'react';
import Note from './Note/Note';

function findMatchingNotes(props) {
    const filteredNotes = (props.currentFolderSelected ? 
              props.notes.filter( note => note.folderId === props.currentFolderSelected ) 
              : props.notes);
    return filteredNotes;
}

export default function Main(props) {
  const useFilteredNotes = findMatchingNotes(props);
  const noteList = useFilteredNotes.map((note, index) => <Note key={index} {...note} />)
  
  return (
    <ul>
      {noteList}
    </ul>
  )
}
