# Tourist Bureau Workshop

You will build a website for the local visitor's bureau that will help tourists explore all the things to do in the area. If they find an excursion they like, they can buy "e-tickets" directly from the site.

**Be sure to look at previous projects for inspiration**

## Home Page (required)

A home page with informational text/images promoting the town and navigation links
to the other pages. It needs a professional, but minimalistic appearance. Their budget
for this project is tiny!

## Activities Page (required)
The page will feature a dropdown list that contains the types (categories) of activities offered by vendors in our community. Once users select a category they will be presented with a list activites in that category. When they select an activity, they will be presented with details and options about that activity.

Requirements: 
- **Display a dropdown list of the provided categories to the user**
    - Add a `<select>` to the `activities.html` with a matching `id` and `name` property do display the categories
    - In `scripts/activities.js` write code that generates options for the categories `<select>` using the data in the `categories` array provided. Use the activity for the `textContent` and `value` for each option you generate.
    - Be Sure to include a default option that says **Select an Activity** with an empty string as it's value.
    - Make a commit

- **When a category is selected, display a dropdown of matching activities**
    - Add a `<select>` to the `activities.html` with a matching `id` and `name` property to display the activities for the selected category
    - In `scripts/activities.js` listen for the change event on the categories dropdown created above using `addEventListener` in the `window.onload` function. 
    - Create a function that is called with the event listener that finds the matching activies in the provided `activites`.
    - Write code that generates options for the actities `<select>` from the activies that match the selected category. Use the `name` property for the `textContent` and the `id` property `value` for each option you generate. 
    - Be Sure to include a default option that says **Select an Activity** with an empty string as it's value.

- **When an activity is selected, information about that activity to the user**
    - Add a `<div>` to the `activities.html` with an `id` property to display the information about the selected activity
    - In `scripts/activities.js` listen for the change event on the activites dropdown created above using `addEventListener` in the `window.onload` function. 
    - Create a function that is called with the event listener that finds the selected activity in the `activites` array. You can leverege the `selectedIndex` property of the dropdown list to find the matching activity in the `activities` array.
    - Display the details of the seleted activity to the user in the `<div>` created above. **Consider creating a function you can call that takes an activity as a parameter and handles displaying the information on the page.**

- **(OPTIONAL STRETCH GOAL) display a form to purchase an e-ticket if the price of the activity is more than $0.00**
    - Create a form on the page with the following fields:
       - the number of tickets needed
       - a credit card number
       - an email address
       - a purchase/submit button
       - a reset button
    - If the user clicks the purchase button, display the following message.
        >Your credit card has been charged $(amount) for (number-of- tickets) to (adventure-name). A confirmation email has been sent to (email).

    **Here are some functions that will help you be successful**  
    ```js

    //This function will hide or show an HTML element on the page
    //Just pass it the id of the element you want to show/hide
    function hideOrShowElement(someElementsID) {
        let el = document.getElementById(someElementsID);
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    }

    ```

    ```js

    //This funciton will return a a list of the matching activities for a given category
    //Just pass it the array of activities and the category you are looking for
    function getActivitiesInCategory(activities, category) {

        //start by creating an empty list to hold our matches
        let matching = [];
        //number of items on the menu
        let numItems = activities.length;

        //loop over the activities to find matches
        for (let i = 0; i < numItems; i++) {
            if (activities[i].category === category) {
                //add that activity to our matches
                matching.push(activities[i]);
            }
        }
        
        //return all the matching menu items
        return matching;
    }


    //Example usage
    let matches = getActivitiesInCategory(activities, "Adventures"); 

    ```

## Hiking Page (Optional)
**This page is a bonus page. Make sure to do a good job on the activities page before attempting this page.**
The page will feature a dropdown list of local hikes loaded from the data. Make sure a "Select a Hike" option appears in the dropdown list. When the user selects a hike, details about that hike will be displayed along with two images (one taken along the hike and another showing a trail map). Sample images are included in the images folder.
To see how to change the source for an image programmatically using JavaScript, see the following:

- Changing src: https://www.w3schools.com/jsref/prop_img_src.asp
- Changing alt: https://www.w3schools.com/jsref/prop_img_alt.asp