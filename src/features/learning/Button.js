import React from 'react';

class Button extends React.Component 
{
 /* Example 1 */
  // handleClick = () => {
  //   this.setState((prevState) =>({
  //     counter: prevState.counter+1
  //   }))
  // }
   /* Example 2 */
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }
  render()
  {
     /* Example 1 */
    //return ( <button onClick={this.handleClick}>{this.state.counter}</button> );
    //return ( <button onClick={() =>this.props.onClickFunction(this.props.incrementValue)}>{this.props.incrementValue}</button> );
    return ( <button onClick={this.handleClick}>{this.props.incrementValue}</button> );
  }
};

export const Result = (props) => {
  return ( <div>{props.counter}</div>)
}

export default Button;
