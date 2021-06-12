"use strict";

/**
 * Display separate <button> per page, adding .active-btn class to active button
 */

const displayButtons = (btnContainer, pages, activeIndex) => {
  // Loop over pages and create <button> per page
  let btns = pages.map((_, pageIndex) => {
    return `
      <button class="page-btn ${activeIndex === pageIndex ? "active-btn" : null}" data-index="${pageIndex}">${pageIndex + 1}</button>`;
  });
  // Insert Next and Previous Button into btns
  btns.push(`<button class="next-btn">Next</button>`);
  btns.unshift(`<button class="prev-btn">Prev</button>`);
  // Update button container
  btnContainer.innerHTML = btns.join("");
};

export default displayButtons;
