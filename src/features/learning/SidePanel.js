import React, { Component } from 'react';
import TreeFilter from './TreeFilter';
//import classnames from 'classnames'
import toggle_on from "../../images/toggle_on.png";
import toggle_off from "../../images/toggle_off.png";
class SidePanel extends Component {

  state = {pressed: true};

  imgStyle = {
    width: '30px',
    align: 'right',
  };

  click = () => {
		this.setState({pressed: !this.state.pressed});
         console.log("Hello Click");
	}
  handleClick = (props) => {
    console.log("Hello TreeFilter - onClick1");
    console.log(props);
    this.props.onClick1(props);
  }

  render() {
    let pic= this.state.pressed? toggle_on : toggle_off
    return (
      <div className="sidebar" > 
       <h3 className="active">Menu</h3>
        <a href="" className="w3-bar-item w3-button">Link 1</a>
        <hr/>
        <div className="showTitle">
          <label className="enableImage">INDUSTRY</label>
          <img onClick={this.click} style={this.imgStyle} src={pic} alt="" align="right" />
          <TreeFilter rows={this.props.rows} onClick2={this.handleClick}/>
        </div>
        <hr/>        
      </div>
    );
  }

}

export default SidePanel;
