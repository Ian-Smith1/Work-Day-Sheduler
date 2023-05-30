$(document).ready(function () {
  $("saveBtn").on("click"),
    function () {
      console.log(this);
      var value = $(this).siblings(".description").val();
      var time = $(this).attr("data-time");
      var hour = moment().hour();

      localStorage.setItem(time, value);
    };
});

$("#currentDay").text(moment());

setInterval(displayTodaysDate, 1000);

currentDate = $("#currentDay");
displayTodaysDate();

function displayTodaysDate() {
  currentDate.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}
var timeArray = [];

for (let i = 9; i < 18; i++) {
  timeArray.push(moment().hour(i).format("h, a"));
}
console.log(timeArray);

function setColors() {
  var currentHr = moment().hours();
  console.log(currentHr);
  $(".time-block").each(function () {
    var currentId = $(this).attr("id");
    console.log(currentHr > currentId);
    if (currentHr > currentId) {
      $(this).addClass("past");
    } else if (currentHr < currentId) {
      $(this).addClass("future").removeClass("past present");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });
}
function saveLocalStorage() {
  var userInput9 = localStorage.getItem("9");
  $("#9").children(".description").text(userInput9);

  var userInput10 = localStorage.getItem("10");
  $("#10").children(".description").text(userInput10);

  var userInput11 = localStorage.getItem("11");
  $("#11").children(".description").text(userInput11);

  var userInput12 = localStorage.getItem("12");
  $("#12").children(".description").text(userInput12);

  var userInput1 = localStorage.getItem("13");
  $("#13").children(".description").text(userInput1);

  var userInput2 = localStorage.getItem("14");
  $("#14").children(".description").text(userInput2);

  var userInput3 = localStorage.getItem("15");
  $("#15").children(".description").text(userInput3);

  var userInput4 = localStorage.getItem("16");
  $("#16").children(".description").text(userInput4);

  var userInput5 = localStorage.getItem("17");
  $("#17").children(".description").text(userInput5);
}

setColors();
saveLocalStorage();
