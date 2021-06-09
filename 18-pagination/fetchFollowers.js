"use strict";

// URL to GitHub API to get first 100 followers
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// Replacement URL to get page 56 of followers
//const url = "https://api.github.com/users/john-smilga/followers?per_page=100&page=56";

// Fetch data from Github and return as a JSON array
const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchFollowers;
