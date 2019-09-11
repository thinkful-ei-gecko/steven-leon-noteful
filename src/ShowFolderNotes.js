import React from 'react';
import { Link } from 'react-router-dom';
import store from './store.js';
import Note from './Main/Note/Note'

//when they click a folder name, its note list is displayed
export default function ShowFolderNotes(props) {
  //take parameter of ID on dynamic ID [ folder/4809238-3249288-23923]
  //find the folder with that ID
  //display the note list, each linking to a showFullNote component

  let folderId = props.match.params.path;
  console.log(`Path: ${folderId}`);
  let showData = '';
  function mapData() {
      showData = store.notes.filter(note => note.folderId === folderId);
      showData.map(note => {
        return <Note key={note.id} {...note} handleNoteClicked={props.handleNoteClicked} noteSelected={props.noteSelected}/>;
      });
    }

  return (
    <div>
      {mapData}
    </div>
  )
}