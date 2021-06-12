"use strict";
/**
 * Fetch 100 Followers from Github to be used as raw data to paginate
 */

// URL to GitHub API to get first 100 followers
// const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// Replacement URL to get page 56 of followers
const url = "https://api.github.com/users/john-smilga/followers?per_page=100&page=56";

// Fetch data from Github and return as a JSON array
const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchFollowers;


// DUMMY DATA
/*
const followers = [{
  avatar_url: "https://avatars.githubusercontent.com/u/56732160?v=4",
  events_url: "https://api.github.com/users/thilak009/events{/privacy}",
  followers_url: "https://api.github.com/users/thilak009/followers",
  following_url: "https://api.github.com/users/thilak009/following{/other_user}",
  gists_url: "https://api.github.com/users/thilak009/gists{/gist_id}",
  gravatar_id: "",
  html_url: "https://github.com/thilak009",
  id: 56732160,
  login: "thilak009",
  node_id: "MDQ6VXNlcjU2NzMyMTYw",
  organizations_url: "https://api.github.com/users/thilak009/orgs",
  received_events_url: "https://api.github.com/users/thilak009/received_events",
  repos_url: "https://api.github.com/users/thilak009/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/thilak009/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/thilak009/subscriptions",
  type: "User",
  url: "https://api.github.com/users/thilak009",
},{
  avatar_url: "https://avatars.githubusercontent.com/u/55289344?v=4",
  events_url: "https://api.github.com/users/kristen0/events{/privacy}",
  followers_url: "https://api.github.com/users/kristen0/followers",
  following_url: "https://api.github.com/users/kristen0/following{/other_user}",
  gists_url: "https://api.github.com/users/kristen0/gists{/gist_id}",
  gravatar_id: "",
  html_url: "https://github.com/kristen0",
  id: 55289344,
  login: "kristen0",
  node_id: "MDQ6VXNlcjU1Mjg5MzQ0",
  organizations_url: "https://api.github.com/users/kristen0/orgs",
  received_events_url: "https://api.github.com/users/kristen0/received_events",
  repos_url: "https://api.github.com/users/kristen0/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/kristen0/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/kristen0/subscriptions",
  type: "User",
  url: "https://api.github.com/users/kristen0",
},{
  avatar_url: "https://avatars.githubusercontent.com/u/56168558?v=4",
  events_url: "https://api.github.com/users/monishamandal02/events{/privacy}",
  followers_url: "https://api.github.com/users/monishamandal02/followers",
  following_url: "https://api.github.com/users/monishamandal02/following{/other_user}",
  gists_url: "https://api.github.com/users/monishamandal02/gists{/gist_id}",
  gravatar_id: "",
  html_url: "https://github.com/monishamandal02",
  id: 56168558,
  login: "monishamandal02",
  node_id: "MDQ6VXNlcjU2MTY4NTU4",
  organizations_url: "https://api.github.com/users/monishamandal02/orgs",
  received_events_url: "https://api.github.com/users/monishamandal02/received_events",
  repos_url: "https://api.github.com/users/monishamandal02/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/monishamandal02/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/monishamandal02/subscriptions",
  type: "User",
  url: "https://api.github.com/users/monishamandal02",
},
];
*/
