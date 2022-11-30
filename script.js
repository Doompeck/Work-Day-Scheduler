// declare needed html elements that will be needed:
// (the currentDay id, the container block that the timeblocks will load into, the jumbotron)
var containerEl = $(".container");
var currentDayEl = $("#currentDay");
// Need to be able to declare the current date and time in total
currentDayEl.text(moment().format("MMMM Do YYYY"));
// will need to use moment to determine the current hour
var currentHour = moment().format("HH");

// will need an array to map available hours
var dayTimeArray = [
    9,
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5
]

// For loop to render a block element for each hour of the day.
// This will include our template html that describes said block
// Will need an if statement in here that determines past, present, or future
function timeBlock() {

    for( i=0; i < dayTimeArray.length; i++) {
        
        htmlTemplate = `
        <div class="row">
        <div class="hour"></div>
        <textarea class=""></textarea>
        <button class="saveBtn">Save</button>
        </div>
        `

    };

};
// Will need an event listener for the container element
// This will be used to save the data for the clicked time's data into local storage.
containerEl.addEventListener("click", function(event) {
    event.preventDefault();
});
