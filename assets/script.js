// Variables used throughout script
var $currentDay = $("#currentDay");
var $saveBtn = $(".saveBtn");
var hourNow = moment().format("H"); // Gets the current hour of the day
var today = moment().format('MMMM Do YYYY'); // Gets the current date

// Shows the current date in the header
$currentDay.text(today);

// Save button function to save the text box to local storage.
$saveBtn.on("click", function () {
    var textBox = $(this).siblings(".description").val(); // .description is the HTML sibling of the button (or "this")
    var textBoxHour = $(this).parent().attr("id"); // .attr("id") is the parent of the button (or "this") 

    localStorage.setItem(textBoxHour, textBox); // stores the user input from the textarea along with the coordinating parent, or hour of the day

    // Checking if variables work in the console
    // console.log(textBoxHour, textBox);
})

// Retrevieving each item from the local storage. Traverses DOM into .description
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Function the change color of blocks throughout the day
function hourBlock() {
    // if 'hourNow' (or the actual current hour) is later then the schedule hour, it will add CSS class of "past"
    if (9 < hourNow) {
        $("#hour-9").addClass("past")
    } 
    // if 'hourNow' (or the actual current hour) is the same as the schedule hour, it will add CSS class of "present"
    else if (9 == hourNow) {
        $("#hour-9").addClass("present")
    } 
    // if 'hourNow' (or the actual current hour) is anything else (or has yet to come), it will add CSS class of "future"
    else {
        $("#hour-9").addClass("future")
    };

    if (10 < hourNow) {
        $("#hour-10").addClass("past")
    } else if (10 == hourNow) {
        $("#hour-10").addClass("present")
    } else {
        $("#hour-10").addClass("future")
    };

    if (11 < hourNow) {
        $("#hour-11").addClass("past")
    } else if (11 == hourNow) {
        $("#hour-11").addClass("present")
    } else {
        $("#hour-11").addClass("future")
    };

    if (12 < hourNow) {
        $("#hour-12").addClass("past")
    } else if (12 == hourNow) {
        $("#hour-12").addClass("present")
    } else {
        $("#hour-12").addClass("future")
    };

    if (13 < hourNow) {
        $("#hour-13").addClass("past")
    } else if (13 == hourNow) {
        $("#hour-13").addClass("present")
    } else {
        $("#hour-13").addClass("future")
    };

    if (14 < hourNow) {
        $("#hour-14").addClass("past")
    } else if (14 == hourNow) {
        $("#hour-14").addClass("present")
    } else {
        $("#hour-14").addClass("future")
    };

    if (15 < hourNow) {
        $("#hour-15").addClass("past")
    } else if (15 == hourNow) {
        $("#hour-15").addClass("present")
    } else {
        $("#hour-15").addClass("future")
    };

    if (16 < hourNow) {
        $("#hour-16").addClass("past")
    } else if (16 == hourNow) {
        $("#hour-16").addClass("present")
    } else {
        $("#hour-16").addClass("future")
    };

    if (17 < hourNow) {
        $("#hour-17").addClass("past")
    } else if (17 == hourNow) {
        $("#hour-17").addClass("present")
    } else {
        $("#hour-17").addClass("future")
    };
};

// Calls function to change color of hour blocks on schedule
hourBlock();