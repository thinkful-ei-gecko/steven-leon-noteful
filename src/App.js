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
    const setFolderId = folderId;
    this.setState({
      folderSelected: setFolderId
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
        <Route exact path="/" component={<App />} />
        <Route path="/header" component={<Header />} />
        <Route path="/sidebar" render={() =>
          <Sidebar folders={store.folders} folderClicked={ this.handleFolderClicked } />
        } />
        <Route path="/main" render={() => 
          <Main notes={store.notes} currentFolderSelected={ this.state.folderSelected } handleNoteClicked={this.handleNoteClicked} noteSelected={this.state.noteSelected}/>
        } />
      </div>
    );
  }
}