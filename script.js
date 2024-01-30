$(function () {
// Displays the current day using Day.js.
  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));

// When the save button is clicked, the text entered and its associated time block are saved to the local storage.
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var timeBlock = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlock, description);
  });
  
  $(".clearBtn").on("click", function (){
    let areYouSure = confirm("Are you sure? Clearing the calendar cannot be undone.");
    if (areYouSure) {
      localStorage.clear();
      location.reload();
    }
  })

// Each time block's id is the number of the hour it represents (for example, the ID of the 11AM time block is 11 and the 2PM time block ID is 14). The if statement checks to see if the ID number is less than, equal to, or greater than the number of the current hour, and sets the CSS of the time block to either past, present, or future.
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

// This loops through each time block, retrieves the saved data from local storage, and sets the value of the textarea to the saved description.
  $(".time-block").each(function() {
   var timeBlockId = $(this).attr("id");
   var savedDescription = localStorage.getItem(timeBlockId);
   $(this).find(".description").val(savedDescription);
  });

});
