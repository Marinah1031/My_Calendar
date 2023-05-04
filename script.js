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

  saveButton.forEach (function (btn) {
    btn.addEventListener('click', function(event) {
      
      const hour = this.parentNode.getAttribute('id');
      const description = this.previousElementSibling.value;
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
//displaying local storage
  function displayNotes() {
    let showNote = document.querySelectorAll('.description');
    showNote.forEach (function (note) {
        const hourId = this.parentNode.getAttribute('id').replace('hour-', '');
  //how to get back to the parent Id
        var localHour = localStorage.getItem(hourId);
      this.textContent(localHour)
        console.log (hourId);
     
   
    })
  }
  displayNotes ()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.

const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  const dateElement = document.querySelector('#currentDay');
  dateElement.textContent = currentDate;
