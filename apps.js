var headingElement = document.getElementById("main-heading")
console.log(headingElement.innerHTML);
var newHeadingText = prompt('please provide a new heading:');
headingElement.innerHTML = newHeadingText;
