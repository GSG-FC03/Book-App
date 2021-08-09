// Create function to move to search Page
let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", moveToSearchPage);

function moveToSearchPage() {
  window.location.href = "searchPage/searchPage.html";
}
