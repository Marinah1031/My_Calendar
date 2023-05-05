// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
window.onload = function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //;

  const saveButton = document.querySelectorAll('.saveBtn');
//adding a save button function that allows it to occur when clicked
  saveButton.forEach (function (btn) {
    btn.addEventListener('click', function(event) {
      
      const hour = this.parentNode.getAttribute('id');
      const description = this.previousElementSibling.value;
      //setting hour and description in local storage
      localStorage.setItem(hour, description);
      console.log (hour);
      console.log (description);
    });
  })
  
};
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // Selecting the time blocks in the calendar
 let timeBlocks = document.querySelectorAll('.time-block');
 //this sets the label for the current hour
  let currentHour = dayjs().hour();
  timeBlocks.forEach(timeBlock => {
    //the hour is taking the id
    const hour = parseInt(timeBlock.getAttribute('id').replace('hour-', ''));
    //indicating whether the hour currently is less or greater than the local time,
    if (hour < currentHour) {
      //if less categorize as past
      timeBlock.classList.add('past');
      timeBlock.classList.remove('present');
      timeBlock.classList.remove('future');
    } else if (hour === currentHour) {
      //current = present
      
      timeBlock.classList.add('present');
      timeBlock.classList.remove('past');
      timeBlock.classList.remove('future');
    } else {
      //after = future
      timeBlock.classList.add('future');
      timeBlock.classList.remove('past');
      timeBlock.classList.remove('present');
    }
  });

  // Loop through each time-block element
document.querySelectorAll('.time-block').forEach((timeBlock) => {
  // Get the id attribute of the time-block element
  const timeBlockId = timeBlock.getAttribute('id');

  // Get the saved user input from localStorage
  const userInput = localStorage.getItem(timeBlockId);

  // Set the value of the corresponding textarea element
  const textarea = timeBlock.querySelector('textarea');
  textarea.value = userInput;
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.

const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const dateElement = document.querySelector('#currentDay');
  dateElement.textContent = currentDate;
