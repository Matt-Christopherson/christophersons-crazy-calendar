// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// 2010-12-31

$(function () {
// Displays the current day using dayjs.
  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var timeBlock = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlock, description);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  $(".time-block").each(function() {
    var currentHour = dayjs().hour();
    var hour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("past");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else if (currentHour < hour) { 
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});
