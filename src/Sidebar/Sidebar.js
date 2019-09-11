import React from 'react'
import FolderItem from './FolderItem/FolderItem';

export default function Sidebar(props) {
  return (
      <ul>
        {props.folders.map((folder, index)=> <FolderItem key={index} folder={folder} folderClicked={ props.folderClicked }/>)}
      </ul>
  )
}
