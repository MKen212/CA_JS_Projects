"use strict";

// ********** set date ************
const copyrightDate = document.getElementById("date");
copyrightDate.innerHTML = new Date().getFullYear();


// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");  // Use hard-coded height
  // The element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight, linksHeight);
  if (containerHeight === 0) {  // default setting
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar & back-to-top link ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(scrollHeight, navHeight);
  // Set fixed navbar
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // Set back-to-top link
  if (scrollHeight > 500) {
    topLink.classList.add("show-top-link");
  } else {
    topLink.classList.remove("show-top-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
// console.log(scrollLinks);
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default actions of moving to link
    e.preventDefault();

    // Get href attribute of element clicked without the leading # using slice
    // slice extracts a section of a string without modifying original string
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);

    // Get the element of the href selected
    const element = document.getElementById(id);

    // Get the NavBar & Container Heights & Check if fixed-nav set
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    // console.log(fixedNav, navHeight);


    // Get the position of the TOP of this element in the document using offsetTop MINUS the height of the navbar
    // offsetTop - A Number, representing the top position of the element, in pixels
    let position = element.offsetTop - navHeight;
    // console.log(position);

    // If NavBar not yet fixed need to add again as will change offsetTop by additional navbar height
    if (!fixedNav) {
      position -= navHeight;
    }

    // If NavBar links have  been expanded on smaller screens (so navbar is higher than 82px) then need to adjust position calculation by height of links container as this gets collapsed once clicked
    if (navHeight > 82) {
      position += containerHeight;
    }
    
    // Scroll to the position of the specific element
    window.scrollTo({
      left: 0,
      top: position,
    });

    // If using the Drop-Down Navbar, make the height 0
    linksContainer.style.height = 0;
  });
});
