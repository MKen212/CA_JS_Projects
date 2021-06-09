"use strict";

import sublinks from "./data.js";

// Hide or Show the SideBar
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");

// Show SideBar
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

// Hide SideBar
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});


// Setup the Sidebar and load all the pages and links
const sidebarLinks = document.querySelector(".sidebar-links");

// Loop through data and output the pages and links
sidebarLinks.innerHTML = sublinks.map((item) => {
  const { page, links } = item;
  // console.log(page, links);
  return `
  <article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links.map((link) => {  // eslint-disable-next-line indent
      return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;  // eslint-disable-next-line indent
    }).join("")}
    </div>
  </article>`;
}).join("");


// Setup the NavBar Link Buttons and SubMenu
const linkBtns = document.querySelectorAll(".link-btn");
const submenu = document.querySelector(".submenu");

// Add Mouseover Event for each Link Button
linkBtns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("mouseover", (event) => {
    // Find NavBar Clicked and get positioning
    const text = event.currentTarget.textContent.toLowerCase();
    const tempBtn = event.currentTarget.getBoundingClientRect();
    // console.log(tempBtn);
    const centre = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    // Get the Links for the relevant page
    const tempPage = sublinks.find((link) => link.page === text);
    /* 
    const tempPage = sublinks.find((link) => {
      return link.page === text;
    }); */
    // console.log(tempPage);

    if (tempPage) {
      const { page, links } = tempPage;
      // Show the submenu in the relevant position to the NavBar button clicked
      submenu.classList.add("show");
      submenu.style.left = `${centre}px`;
      submenu.style.top = `${bottom}px`;
      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      } else if (links.length > 3) {
        columns = "col-4";
      }
      // Populate the submenu
      submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links.map((link) => {  // eslint-disable-next-line indent
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;  // eslint-disable-next-line indent
      }).join("")}
      </div>
     </section>`;
    }
  });
});


// Adjust display of submenu
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

// Hide submenu if Mouseover any part of main "hero" window (excluding navbar)
hero.addEventListener("mouseover", () => {
  submenu.classList.remove("show");
});

// Hide submenu if Mouseover any part of navbar, unless it contains a link-btn
nav.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
