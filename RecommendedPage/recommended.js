//  DOM get the books container
const bookArea = document.querySelector(".container") //The container for all books 
const bookData = document.querySelector(".book") //The container book Image  tag container
const clickableBook = document.querySelector(".book-image") //books image tag
const popup = document.querySelector(".popup") //pop up that contains the book descriptions


//  An event listener that applies function when the page loaded
document.addEventListener("DOMContentLoaded", randomBook); //dipslay books when open the page 
bookArea.addEventListener("click", displayPopup); //Display the popup when click at book image
popup.addEventListener("click", hidePopup); // Hide book descriptions when click anywhere




//  Function to get images from API

// book dsecription path is: bookData.description
function randomBook(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=random")
    .then(res=>res.json())
    .then(data=> {
        for(let i=0; i<=10; i++){
            let bookData=data.items[i].volumeInfo;
            let img= bookData.imageLinks.smallThumbnail;
            
            book = document.createElement("div")
            book.classList.add("book")
            
            bookImage = document.createElement("img")
            bookImage.classList.add("book-image")
            
            bookArea.appendChild(book)
            book.appendChild(bookImage)
            bookImage.src = img
            
        }
    })
    .catch(error=>console.log("There is an error which is",error))
}

//  Function to display the Popup when click at container
function displayPopup(){
    // popup.style.display ="block";
    if(popup.style.display = "none"){
        popup.style.display = "flex"
    }

}

//  Function to display the Popup when click at anywhere
function hidePopup(){
popup.style.display = "none"
}
