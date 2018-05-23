import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import actions from '../../Actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import "./Menu.css"

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
    
  getDerivedStateFromProps(nextProps, prevState) {
    console.log("componentWillReceiveProps");
  }

  up(){
    var beats =  this.props.state.RhythmBar.beats + 1
    this.props.dispatch(actions.RhythmBar.updateBeats({beats: beats}))
  }

  down(){
    var beats =  this.props.state.RhythmBar.beats - 1
    if (beats < 1)
      beats = 1
    this.props.dispatch(actions.RhythmBar.updateBeats({beats: beats}))
  }
  

	render() {
		return (
      <div id="menuContainer">
        <div id="upDownButtons">
          <button onClick={this.up.bind(this)}>up</button>
          <button onClick={this.down.bind(this)}>down</button>
        </div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    state: state
  };
}


export default connect(
  mapStateToProps,
  null
)(Menu);