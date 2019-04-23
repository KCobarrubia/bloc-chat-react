import React, { Component } from 'react';
import * as firebase from 'firebase';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Content: "",
      roomID: "",
      sentAt: "",
      username: "",
      messages: []
    };
    
    this.messagesRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) })
    });
  }

  render() {
    return (
      <section className='MessageList' >
        <div>{this.props.activeRoom}</div>
        {
          
          this.state.messages.filter((message)=> message.roomID == this.props.activeRoom).map((message) =>
            <section key={message.key} >
              <div>{message.username}</div>
              <div>{message.Content}</div>
              <div>{message.sentAt}</div>
            </section>
          )
        } 
      </section>
    )
    
      }
    }
    
    export default MessageList;
