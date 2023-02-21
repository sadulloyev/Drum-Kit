for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    switch (buttoninnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

      default:
        console.log(buttoninnerHTML);
    }
  });
}

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     document.getElementByclassName("drum")[this].style.color = "white";
//   });
// }
// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// var housekeeper1 = {
//   name: "Angela",
//   age: "19",
//   hasworkexperience: true,
//   languages: ["English", "Franch"],
// };
// function HouseKeeper(name, age, experience, degree) {
//   this.name = name;
//   this.age = age;
//   this.experience = experience;
//   this.degree = degree;
// }
// var housekeeper1 = new HouseKeeper("Jane", 21, "2 years", "Bachelor");
