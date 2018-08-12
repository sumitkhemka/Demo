import React, { Component } from 'react';


const Row = (props) =>{
  return (
          <tr key={props.id}>
            <td> {props.alert}</td>
            <td> {props.alert_date}</td>
            <td> {props.product}</td>
            <td> {props.tranche_id}</td>
            <td> {props.login}</td>
            <td> {props.id}</td>
            <td> <img alt="" width ="75" src= {props.avatar_url} /></td>
          </tr>
  );
};
class Table extends Component 
{ 
      render ()
      {
        //= (props) =>{
          return (
            <div className="learning-table">
              <table>
              <thead>
              <tr >
                <th>Alert</th>
                <th>Alert Date</th>
                <th>Product</th>
                <th>Tranche Id</th>
                <th>Login</th>
                <th>ID</th>
                <th>URL</th>
                </tr>
              </thead>
              <tbody>
              {this.props.rows.map( (row) => <Row {...row}/> ) }
              </tbody>
              </table>
            </div>
          );
      };
};
export default Table;
