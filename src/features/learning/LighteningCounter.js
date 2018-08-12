import React, { Component } from 'react';

export default class LighteningCounter extends Component {
  state={
        strikes: 0
  }
  constructor(props) {
    super(props);
    this.state= {
                strikes: 0
    };
    this.timerTick = this.timerTick.bind(this);
  }

  componentDidMount(){
    setInterval(this.timerTick,1000);
  }
  timerTick() {
//this.setState( (prevState) => ( {  strikes: prevState.strikes+100 } ));
this.setState(  {  strikes: this.state.strikes+100 } );
  }
  render() {
    let divStyle = {
      margin: 10,
      padding: 10,
      backgroundColor: "black",
      width: 100,
      height: 100,
      textAlign: "center",
      color: '#999'
    }
    return (
      <div className="learning-lightening-counter" style={divStyle}>
        <h1>{this.state.strikes}</h1>
      </div>
    );
  }
}

//export default LighteningCounter;