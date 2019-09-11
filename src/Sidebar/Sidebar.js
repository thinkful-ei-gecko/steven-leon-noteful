import React from 'react'
import FolderItem from './FolderItem/FolderItem';

export default function Sidebar(props) {
  return (
    <div>
      <ul>
        {props.folders.map(folder => <FolderItem folder={folder} />)}
      </ul>
    </div>
  )
}
