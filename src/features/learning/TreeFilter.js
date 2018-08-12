import React, { Component } from 'react';

class Row extends Component{
  handleClick = (props) => {
      console.log("Hello Span - onClick3");
      console.log(this.props.id);
      this.props.onClick3(this.props.id);
    
  }
  render()
  {
  return (   
          <div>
          <label key={this.props.id} className="container"><input type="checkbox"  />
          {this.props.description}  <span key={this.props.id} onClick={this.handleClick}  className="checkmark"></span></label>
          </div>
  );
  };
};

class TreeFilter extends Component {
  handleClick = (props) => {
    console.log("Hello Row - onClick2");
    console.log(props);
    this.props.onClick2(props);
  }
  render() {
    return (
      <div className="learning-tree-filter">
        {this.props.rows.map( row => <Row onClick3={this.handleClick} {...row} />) }
      </div>
    );
  };
};
export default  TreeFilter;

//onClickfunc={this.handleClick}