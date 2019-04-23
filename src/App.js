import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
  constructor(props) {
    super(props)
    this.state = {
      activeRoom: ""
    };
    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }

  render() {
    return (
      <div className="App">
        <h1> Bloc Chat</h1>
        <RoomList
          firebase={firebase}
          setActiveRoom={(room) => this.setActiveRoom(room)}
          activeRoom={this.state.activeRoom}
        />
        <h2>{this.state.activeRoom.name || "Select a room"}</h2>

        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom.key}
        />
        
        
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
