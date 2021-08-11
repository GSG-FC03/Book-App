//Create a variable named quote to get h2 element by his id to put the random qutoes on it
let quote = document.getElementById("qouteId");

//The begining of the function that will appear random qutoes in h2 palce when the user reload the page
function getRandomQuotes() {
  fetch("https://quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
         quote.innerHTML ='" '+ data.content +' "';
    })
    .catch((error) => console.log("Error: ", error));
}
//The end of the function

//Call the function
getRandomQuotes();

// Create function to move to recommended Page
let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", moveToSearchPage);

function moveToSearchPage() {
  window.location.href = "./RecommendedPage/recommended.html";
}
