import React from 'react'
import { Link } from 'react-router-dom';

export default function FolderItem(props) {
  const folderPath = `folder/${props.folder.id}`
  return (
    <Link to={folderPath}><li key={props.folder.id} onClick={ () => props.folderClicked(props.folder.id) }>
      {props.folder.name}
    </li></Link>
  )
}
