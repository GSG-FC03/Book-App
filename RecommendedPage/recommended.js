//  DOM get the books container
const bookArea = document.querySelector(".container") //The container for all books 
const bookData = document.querySelector(".book") //The container book Image  tag container
const clickableBook = document.querySelector(".book-image") //books image tag
const popup = document.querySelector(".popup") //pop up that contains the book descriptions


//  An event listener that applies function when the page loaded
document.addEventListener("DOMContentLoaded", randomBook); //dipslay books when open the page 
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
            let bookID= data.items[i].id;
            console.log(bookID)
            
            book = document.createElement("div")
            book.setAttribute("class",`book ${bookID}`) // give books className book to style it | and class as bookID to call it onclick
          
            book.addEventListener("click", displayPopup); //Display the popup when click at book image
            
            
            bookImage = document.createElement("img")
            bookImage.classList.add("book-image")
            bookImage.setAttribute("class",`book-image ${bookID}`)
            
            bookArea.appendChild(book)
            book.appendChild(bookImage)
            bookImage.src = img
            
        }
    })
    .catch(error=>console.log("There is an error which is",error))
}

//  Function to display the Popup when click at container and display the book details
function displayPopup(event){
    let bookArray =[];
    bookArray.push(event.target.className.split(" ")[1])
    let bookID = bookArray[0];
    console.log(bookID)
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookID}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    popup.style.display ="block";
    if(popup.style.display = "none"){
        popup.style.display = "flex"
    }

}

//  Function to display the Popup when click at anywhere
function hidePopup(){
popup.style.display = "none"
}
