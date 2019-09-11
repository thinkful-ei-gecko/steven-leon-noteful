import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import store from './store.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store,
      folderSelected: null,
      noteSelected: null
    }
  }

  handleFolderClicked = (folderId) => {
    this.setState({
      folderSelected: folderId
    })
  }

  handleNoteClicked = (noteId) => {
    this.setState({
      noteSelected: noteId
    })
    
  }
  render() {
    return (
      <div>
        <Header />
        <Sidebar folders={store.folders} folderClicked={ this.handleFolderClicked } />
        <Main notes={store.notes} currentFolderSelected={ this.state.folderSelected } handleNoteClicked={this.handleNoteClicked} noteSelected={this.state.noteSelected}/>
      </div>
    );
  }
}