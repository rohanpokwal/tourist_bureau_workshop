"use strict";

let categories = [
  "Adventures",
  "Arts & Crafts",
  "Museums",
  "Wine Tastings",
  "Other",
];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
  {
    category: "Adventures",
    id: "A102",
    name: "River Runners: Float Trip",
    description:
      "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
    location: "145 FM 103",
    price: 65.0,
  },
  {
    category: "Adventures",
    id: "A103",
    name: "River Runners: Ride the Rapids",
    description:
      "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
    location: "145 FM 103",
    price: 145.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC101",
    name: "Painting with a Twist : Oils",
    description:
      "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Arts & Crafts",
    id: "AC102",
    name: "Painting with a Twist : Watercolor",
    description:
      "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
    location: "1991 Paint Drive",
    price: 40.0,
  },
  {
    category: "Museums",
    id: "M101",
    name: "Bravings Airship Museum",
    description:
      "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
    location: "101 Airfield Drive",
    price: 10.0,
  },
  {
    category: "Museums",
    id: "M102",
    name: "Forks and Spoons Museum",
    description:
      "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
    location: "1056 Lost Knives Court",
    price: 3.0,
  },
  {
    category: "Museums",
    id: "M103",
    name: "Steenges Computing Museum",
    description:
      "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
    location: "103 Technology Way",
    price: 0.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-101",
    name: "Hastings Winery Tours and Tastings",
    description:
      "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
    location: "10987 FM 1187",
    price: 12.0,
  },
  {
    category: "Wine Tastings",
    id: "WT-102",
    name: "Lone Oak Winery",
    description:
      "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
    location: "121 Burleson Court",
    price: 0.0,
  },
  {
    category: "Other",
    id: "OTH101",
    name: "Fire Department: Ride Along",
    description:
      "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
    location: "10 Redline Drive",
    price: 25.0,
  },
  {
    category: "Other",
    id: "OTH102",
    name: "Homes For Our Neighbors",
    description:
      "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
    location: "Call (555) 555-5555",
    price: 0.0,
  },
];

window.onload = function () {
  //get access of selectCategories
  let selectCategories = document.querySelector("#selectCategories");
  let selectActivities = document.querySelector("#selectActivities");

  //get access to the form
  let categoriesForm = document.querySelector("#categoriesForm");
  //this function will populate the dropdown options for users to select
  initiateCategoriesDropDown();

  //add a event listener to have the another dropdown menu with activities based on what user select (in this case it is category)
  selectCategories.addEventListener("change", initiateActivitiesDropDown);

  //add a event listener to display result based on what activity user picks
  categoriesForm.addEventListener("submit", displayResult);
};

//Function to add options to the select (dropdown menu)
function initiateCategoriesDropDown() {
  //get access to select element
  let selectCategories = document.querySelector("#selectCategories");

  //creating a default option
  let defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a Category";
  defaultOption.value = "";
  selectCategories.appendChild(defaultOption);

  //Add all the categories in the dropdown from the given array
  let categoriesLength = categories.length;
  for (let i = 0; i < categoriesLength; i++) {
    //add each category as newOption
    let newOption = document.createElement("option");
    newOption.textContent = categories[i];
    newOption.value = categories[i];
    selectCategories.appendChild(newOption);
  }
}

//Function to add options to the select (dropdown menu) in this case categories
function initiateActivitiesDropDown() {
  //get access to activities dropdown menu
  let selectActivities = document.querySelector("#selectActivities");
  selectActivities.length = 0;
  //get the value of whatever the user selected and pass this value to the getActivitiesInCategory function which match with the category
  let selectedCategories = document.querySelector("#selectCategories").value;

  //this will give me the array of that matched category
  //Now play with this array to populate the activities
  let activityMatchedCategory = getActivitiesInCategory(
    activities,
    selectedCategories
  );

  //Adding the default options
  let defaultOption = document.createElement("option");
  defaultOption.textContent = "Select an Activity";
  defaultOption.value = "";
  selectActivities.appendChild(defaultOption);

  //Add all the activities in the dropdown based on what user selects
  let activitiesLength = activityMatchedCategory.length;
  for (let i = 0; i < activitiesLength; i++) {
    //add each category as newOption
    let newOption = document.createElement("option");
    newOption.textContent = activityMatchedCategory[i].name;
    newOption.value = activityMatchedCategory[i].id;
    selectActivities.appendChild(newOption);
  }
}

//This function will return a a list of the matching activities for a given category
//Just pass it the array of activities and the category you are looking for
function getActivitiesInCategory(activities, category) {
  //start by creating an empty list to hold our matches
  let matching = [];

  //number of items on the menu
  let numItems = activities.length;

  //loop over the activities to find matches
  for (let i = 0; i < numItems; i++) {
    if (activities[i].category === category) {
      //add that activity to our matches array
      matching.push(activities[i]);
    }
  }

  //return all the matching menu items
  return matching;
}

//This function will display the result
function displayResult(event) {
  //keep the form from reloading the page
  event.preventDefault();

  //get access to select an activity dropdown
  let selectActivities = document.querySelector("#selectActivities");

  //get access to div for result
  let resultdiv = document.querySelector("#displayResult");

  //get the index of what user selects in Activity
  let selectedIndex = selectActivities.selectedIndex - 1;

  //this is what user selected which returns an object
  let selectedActivity = activities[selectedIndex];
  console.log(selectedActivity);

  //put the result in a div
  resultdiv.innerHTML = `
  <div>Category: ${selectedActivity.category}</div>
  <div>Name: ${selectedActivity.name}</div>
  <div>Location: ${selectedActivity.location}</div>
  <div>Description: ${selectedActivity.description}</div>

 `;
}
