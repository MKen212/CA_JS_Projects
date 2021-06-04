"use strict";

// ****** SELECT ITEMS **********
const alertBox = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// ****** PREPARE EDIT MODE AND SET TO FALSE **********
let editElement;
let editFlag = false;
let editID = "";
grocery.focus();

// ****** EVENT LISTENERS **********
// Submit Form
form.addEventListener("submit", submitItem);
// Clear Items Button
clearBtn.addEventListener("click", clearItems);
// Load Items at Startup
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
// Event Function to Add or Edit an Item
function submitItem(event) {
  event.preventDefault();
  const value = grocery.value;
  const itemID = new Date().getTime().toString();  // Quick way to get unique ID
  if (value && !editFlag) {
    // Value entered and NOT in edit mode - create new item article
    displayListItem(itemID, value);
    
    // Add item to local storage
    addToLocalStorage(itemID, value);

    // Show Container
    container.classList.add("show-container");

    // Display success message
    displayAlert("Item added to the list", "success");

    // Set page back to defaults
    setBackToDefaults();
  } else if (value && editFlag) {
    // Value entered and IN edit mode
    // Assign the value entered back to the relevant Edit Element
    editElement.textContent = value;
    
    // Update item in local storage
    updateLocalStorage(editID, value);

    // Display success message
    displayAlert("Item changed", "success");

    // Set page back to defaults
    setBackToDefaults();
  } else {
    // Empty value entered
    displayAlert("Empty value submitted", "danger");
  }
}

// Event Function to Clear all items
function clearItems() {
  // Get all items
  const items = document.querySelectorAll(".grocery-item");
  
  // Loop through items and remove each from grocery-list
  if (items.length >  0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  
  // Remove All Items from Local Storage
  localStorage.removeItem("items");
  
  // Hide the grocery-container
  container.classList.remove("show-container");

  // Display emptied message
  displayAlert("List has been emptied", "danger");

  // Set page back to defaults
  setBackToDefaults();
}

// Event Function to Edit an Item
function editItem(event) {
  // Navigate to parent <article> element of button
  const article = event.currentTarget.parentElement.parentElement;

  // Get item to be edited
  editElement = event.currentTarget.parentElement.previousElementSibling;
  // console.log(editElement);

  // Load the form input element with the item contents
  grocery.value = editElement.textContent;

  // Set edit mode & get article ID
  editFlag = true;
  editID = article.dataset.id;
  submitBtn.textContent = "Edit";
  grocery.focus();
}

// Event Function to Delete an Item
function deleteItem(event) {
  // Navigate to parent <article> element of button
  const article = event.currentTarget.parentElement.parentElement;
  // console.log(element);

  // Remove item from list
  list.removeChild(article);

  // Remove Item from Local Storage
  const itemID = article.dataset.id;
  removeFromLocalStorage(itemID);

  // Hide container if no items remain
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  // Display removed message
  displayAlert("Item has been removed", "danger");

  // Set page back to defaults
  setBackToDefaults();  
}

// Function to Display Alert
function displayAlert(message, type) {
  alertBox.textContent = message;
  alertBox.classList.add(`alert-${type}`);

  // Remove Alert
  setTimeout(() => {
    alertBox.textContent = "";
    alertBox.classList.remove(`alert-${type}`);
  }, 1000);
}

// Function to set page back to defaults & exit edit mode
function setBackToDefaults() {
  grocery.value = "";
  grocery.focus();
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}

// ****** LOCAL STORAGE **********
// Function to Add Item to Local Storage
function addToLocalStorage(id, value) {
  const item = { id, value };
  // console.log(grocery);

  // Get items from local storage OR just set an empty array
  let items = getLocalStorage();
  
  // Add item
  items.push(item);

  // Store
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to Remove Item from Local Storage
function removeFromLocalStorage(id) {
  // Get items from local storage
  let items = getLocalStorage();

  // Filter Items and only include items that are NOT ID
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  // Store updated list
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to Update Item in Local Storage
function updateLocalStorage(id, value) {
  // Get items from local storage
  let items = getLocalStorage();

  // Update relevant id from items
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });

  // Store updated list
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to Get items already in Local Storage
function getLocalStorage() {
  return localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")) :
    [];
}


// ****** SETUP ITEMS **********
// Load any existing items on page load
function setupItems() {
  // Get items from local storage
  let items = getLocalStorage();
  
  // Display any items found
  if (items.length > 0) {
    items.forEach((item) => {
      displayListItem(item.id, item.value);

    });

    // Show Container
    container.classList.add("show-container");
  }
}

// Function to display a new item in the item list on screen
function displayListItem(id, value) {
  // Create new article
  const newItem = document.createElement("article");
  newItem.classList.add("grocery-item");
  
  // Add data-id to article
  const attr = document.createAttribute("data-id");
  attr.value = id; 
  newItem.setAttributeNode(attr);
  // console.log(attr);
  
  // Add content to article
  newItem.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  
  // Add Event Listeners for new buttons
  const editBtn = newItem.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  const deleteBtn = newItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  
  // Add article to list and display success message
  list.appendChild(newItem);
}
