"use strict";

/**
 * Display separate <article> code block per follower
 */

const container = document.querySelector(".container");

const display = (followers) => {
  // Iterate over followers to get required data
  const newFollowers = followers.map((person) => {
    const { avatar_url, login, html_url } = person;
    return `
      <article class="card">
        <img src="${avatar_url}" alt="${login}}" />
          <h4>${login}</h4>
        <a href="${html_url}" class="btn">View Profile</a>
      </article>`;
  }).join("");
  container.innerHTML = newFollowers;
};

export default display;
