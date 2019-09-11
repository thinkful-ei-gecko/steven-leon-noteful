import React from 'react'

export default function FolderItem(props) {
  return (
    <li key={props.folder.id} onClick={ () => props.folderClicked(props.folder.id) }>
      {props.folder.name}
    </li>
  )
}
