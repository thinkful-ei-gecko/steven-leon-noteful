import React, {Component} from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import store from './store.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store,
      folderSelected: null
    }
  }

  handleFolderClicked = (folderId) => {
    const setFolderId = folderId;
    this.setState({
      folderSelected: setFolderId
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar folders={store.folders} folderClicked={ this.handleFolderClicked } />
        <Main notes={store.notes} currentFolderSelected={ this.state.folderSelected }/>
      </div>
    );
  }
}