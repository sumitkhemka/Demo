// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
           counter:5,
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

export default initialState;
