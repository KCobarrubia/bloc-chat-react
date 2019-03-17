import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var config = {
  apiKey: "AIzaSyBAXB1UFVND2ybjX5_vX57gxAT9yNrRofg",
  authDomain: "bloc-chat-react-kc.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-kc.firebaseio.com",
  projectId: "bloc-chat-react-kc",
  storageBucket: "bloc-chat-react-kc.appspot.com",
  messagingSenderId: "228959595911"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Bloc Chat</h1>
        <RoomList firebase={firebase} />
          {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
