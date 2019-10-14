import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
// We're always going to import connect, we're going to call connect by passing in our Component, and define mapStateToProps so set the state, and return the object that returns the props to the component. So now this.props, will contain the state from those reduces and setup by the mapStateToProps function that held the state as an argument. The selectSong in a map allows the this.props to now have a action of selectSong, and is not called as a normal function anymore, but wrapped as a store.dispatch function for redux.
