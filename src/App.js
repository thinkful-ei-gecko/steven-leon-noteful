import React, {Component} from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import store from './store.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar folders={store.folders} />
        <Main notes={store.notes}/>
      </div>
    );
  }
}