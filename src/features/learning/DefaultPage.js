import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
//import Button, {Result}  from './Button';
import Table from './Table';
import SidePanel from './SidePanel'
import LighteningCounter from './LighteningCounter'

// export class DefaultPage extends Component {
//   // static propTypes = {
//   //   learning: PropTypes.object.isRequired,
//   //   actions: PropTypes.object.isRequired,
//   // };

//   render() {
//     return (
//       <div className="learning-default-page">
//         <br/>
//         <Button />
//         <Result />
//       </div>
//     );
//   }
// }

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    learning: state.learning,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export class DefaultPage extends Component {
 state = { counter:5,
           selectedIndustry: [],
           data:
           [
              {
                industry_id: 1,
                alert: "DDA",
                alert_date: "2018-01-09",
                product: "MA",
                tranche_id: 12345,
                key: 1,
                login: "mojombo",
                id: 1,
                node_id: "MDQ6VXNlcjE=",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/mojombo",
                html_url: "https://github.com/mojombo",
                followers_url: "https://api.github.com/users/mojombo/followers",
                following_url: "https://api.github.com/users/mojombo/following{/other_user}",
                gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
                starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
                organizations_url: "https://api.github.com/users/mojombo/orgs",
                repos_url: "https://api.github.com/users/mojombo/repos",
                events_url: "https://api.github.com/users/mojombo/events{/privacy}",
                received_events_url: "https://api.github.com/users/mojombo/received_events",
                type: "User",
                site_admin: false
              },
              {
                industry_id: 2,
                alert: "DDA",
                alert_date: "2017-01-09",
                product: "MA",
                tranche_id: 12345,
                key: 2,
                login: "defunkt",
                id: 2,
                node_id: "MDQ6VXNlcjI=",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/defunkt",
                html_url: "https://github.com/defunkt",
                followers_url: "https://api.github.com/users/defunkt/followers",
                following_url: "https://api.github.com/users/defunkt/following{/other_user}",
                gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
                starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
                organizations_url: "https://api.github.com/users/defunkt/orgs",
                repos_url: "https://api.github.com/users/defunkt/repos",
                events_url: "https://api.github.com/users/defunkt/events{/privacy}",
                received_events_url: "https://api.github.com/users/defunkt/received_events",
                type: "User",
                site_admin: true
              },
              {
                industry_id: 3,
                alert: "PMA",
                alert_date: "2016-01-09",
                product: "MA",
                tranche_id: 12345,
                key: 3,
                login: "pjhyett",
                id: 3,
                node_id: "MDQ6VXNlcjM=",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/pjhyett",
                html_url: "https://github.com/pjhyett",
                followers_url: "https://api.github.com/users/pjhyett/followers",
                following_url: "https://api.github.com/users/pjhyett/following{/other_user}",
                gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
                starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
                organizations_url: "https://api.github.com/users/pjhyett/orgs",
                repos_url: "https://api.github.com/users/pjhyett/repos",
                events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
                received_events_url: "https://api.github.com/users/pjhyett/received_events",
                type: "User",
                site_admin: false
              },
              {
                industry_id: 4,
                alert: "PMA",
                alert_date: "2016-01-09",
                product: "MA",
                tranche_id: 12345,
                key: 4,
                login: "pjhyett",
                id: 4,
                node_id: "MDQ6VXNlcjM=",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/pjhyett",
                html_url: "https://github.com/pjhyett",
                followers_url: "https://api.github.com/users/pjhyett/followers",
                following_url: "https://api.github.com/users/pjhyett/following{/other_user}",
                gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
                starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
                organizations_url: "https://api.github.com/users/pjhyett/orgs",
                repos_url: "https://api.github.com/users/pjhyett/repos",
                events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
                received_events_url: "https://api.github.com/users/pjhyett/received_events",
                type: "User",
                site_admin: false
              }

            ],
            industry:
            [
              {key: 1,id: 1, description: "Internet"},
              {key: 2,id: 2, description: "Natural Gas"},
              {key: 3,id: 3, description: "Financial"},
              {key: 4,id: 4, description: "Humar Resource"},
              {key: 5,id: 5, description: "Marketing"},
              {key: 6,id: 6, description: "Digital"},
              {key: 7,id: 7, description: "Real Estate"},
              {key: 8,id: 8, description: "Media"},
              {key: 9,id: 9, description: "Civil Aviation"},
            ]
 };
 
  render() {
    return (
      <div >
      <SidePanel rows={this.state.industry} onClick1={this.filterData} reFilter={this.reFilter}/>
      <div className="content" >

        <br/>
           <LighteningCounter />
        <hr/>
        {/*<Button incrementValue ={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue ={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue ={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue ={100} onClickFunction={this.incrementCounter} />
        <Result counter ={this.state.counter} />*/}
        <Table rows={this.state.data}/>
      </div>
   
      </div>
    );
  }
  reFilter = () => {

  }
    filterData = (id) => {
       //console.log( "length : "+this.state.selectedIndustry.length);
       //this.state.selectedIndustry.map(i => console.log("value:"+i))
      if(this.state.selectedIndustry.length===0 )
      {
         this.setState( (prevState) => ( { selectedIndustry: prevState.selectedIndustry.concat(id) }) );
         console.log( "Length after length 0 concat  :" +this.state.selectedIndustry.length);
      }
      else 
      if(this.state.selectedIndustry.indexOf(id) < 0){
        //console.log( "indexof  :"+id+"length: "+this.state.selectedIndustry.length);
        this.setState( (prevState) => ( { selectedIndustry: prevState.selectedIndustry.concat(id) }) );
        //console.log( "Length after cocnat  :" +this.state.selectedIndustry.length);
      }
      else { 
        this.setState( (prevState) => ( { selectedIndustry: prevState.selectedIndustry.filter(abc => abc !== id) } ) );
        //console.log( "Length after filter  :" +this.state.selectedIndustry.length);
      }
      //console.log("filterData : "+id + " length :" + this.state.selectedIndustry.length);
      this.state.selectedIndustry.map(i => console.log("value :"+i));
      this.setState((prevState) =>({ 
        data: prevState.data.filter( row => ( row.industry_id===id) )
      }));
      this.state.data.map(i => console.log("value industry id:"+i.industry_id));
      console.log("value id id:"+id);
      this.state.selectedIndustry.map(i => console.log("value industry:"+i))
  }
    incrementCounter = (incrementValue) => {
    this.setState((prevState) =>({
      counter: prevState.counter+incrementValue
    }))
  }  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
