import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import store from './store.js';
import Note from './Main/Note/Note';
import ShowFolderNotes from './ShowFolderNotes';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store,
      noteSelected: null
    }
  }

  // handleFolderClicked = (folderId) => {
  //   this.setState({
  //     folderSelected: folderId
  //   })
  // }

  // handleNoteClicked = (noteId) => {
  //   this.setState({
  //     noteSelected: noteId
  //   })
    
  // }
  render() {
    return (
      <div>
          <Header />
          <Route
            path='/folder/:folderId'
            render={() => 
              <ShowFolderNotes notes={store.notes} handleNoteClicked={this.handleNoteClicked} noteSelected={this.state.noteSelected}/>
            }
          />
          <Route 
            path='/note/:noteId'
            render={() =>
              <Main notes={store.notes} currentFolderSelected={ this.state.folderSelected } handleNoteClicked={this.handleNoteClicked} noteSelected={this.state.noteSelected}/>
            } 
          />
        <Sidebar folders={store.folders} folderClicked={ this.handleFolderClicked } />
        {/* <Main notes={store.notes} currentFolderSelected={ this.state.folderSelected } handleNoteClicked={this.handleNoteClicked} noteSelected={this.state.noteSelected}/> */}
      </div>
    );
  }
}