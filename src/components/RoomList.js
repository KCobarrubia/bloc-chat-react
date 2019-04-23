import React, { Component } from 'react';
import MessageList from './MessageList';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: '',
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.onChange = this.onChange.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) })
    });
  }

  onChange(e) {
    this.setState({ newRoomName: e.target.value});
  }

  handleClickSubmit() {
    this.roomsRef.push(
      { name: this.state.newRoomName}
    );
  }

  handleRoomClick(room) {
    this.props.setActiveRoom(room);
  }

  render() {
    return (
      <section className='RoomList'>
        <ul>
          {
            this.state.rooms.map((room) =>
              <li key={room.key} onClick={() => this.handleRoomClick(room)} >{room.name}</li>
            )
          }
        </ul>

        <button type="button" data-toggle="modal" data-target="#myModal">Create Room</button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create Room</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <form onSubmit={this.handleClickSubmit}>
                  <p>Enter a room name: </p>
                  <input type="text" value={this.state.newRoomName} onChange={this.onChange} />
                  <input type="submit" value="Submit" />
                </form>  
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default RoomList;