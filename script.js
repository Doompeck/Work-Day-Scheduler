// declare needed html elements
var containerEl = $(".container");
var currentDayEl = $("#currentDay");

// insert the days date, formatted, into the currentDayEl
currentDayEl.text(moment().format("MMMM Do YYYY"));
// declare the current hour
var currentHour = moment().format("HH");

// time range array (workin' 9 to 5)
// add more hour values into the array to increase the hours in the day to be assigned
var dayTimeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// main function body.  This includes the for loop that runs through the array and builds and appends the html template for each hour.
function timeBlock() {
  for (i = 0; i < dayTimeArray.length; i++) {
    var pastPresentFuture = "";
    var hour = "hour-" + dayTimeArray[i];
    var storedValue = localStorage.getItem(hour);
    formatHour = moment(dayTimeArray[i], "H").format("ha");

    // this if statement is the logic that determines if an hour is past, present, or future
    // this is plugged into the textarea class in order to determine the css values.
    if (dayTimeArray[i] < currentHour) {
      pastPresentFuture = "past";
    } else if (dayTimeArray[i] == currentHour) {
      pastPresentFuture = "present";
    } else {
      pastPresentFuture = "future";
    }
    // logic to ensure that if there is no stored value for an hour then that hour displays nothing instead of "null"
    if (storedValue === null) {
      storedValue = "";
    }

    htmlTemplate = `
        <div class="row time-block">
        <div class="hour col-1">${formatHour}</div>
        <textarea class="col-10 ${pastPresentFuture}">${storedValue}</textarea>
        <button class="col-1 saveBtn" data-hour="${hour}">Save</button>
        </div>
        `;
    // appending our looped template literal into the container element
    containerEl.append(htmlTemplate);
  }
}

timeBlock();
// our event listener on the container element.
// this listens for our click on the save button and stores the value of the textarea and the data attribute "data-hour" into local storage
containerEl.on("click", "button", function (event) {
  event.preventDefault();

  var hourText = $(this).prev().val();
  var hourKey = $(this).attr("data-hour");
  localStorage.setItem(hourKey, hourText);
});
