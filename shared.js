// Dom is document object model.

var backdrop = document.querySelector(".backdrop"); // querySelector will only
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
// select the first element with that class name.

// querySelectorAll() will select all elements with class backdrop.
// console.dir() will view the element as an object with all the properties
// and methods.

// console.dir(selectPlanButton);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}
