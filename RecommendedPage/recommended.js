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

function randomBook() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=random")
    .then(res => {
        return res.json();
    })
    .then(data => {
        for(let i=0; i<=10; i++){
            let bookData=data.items[i].volumeInfo;
            let img= bookData.imageLinks.smallThumbnail;
            let bookID= data.items[i].id;
            
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
    if(popup.style.display = "none"){
        popup.style.display = "flex"
        popup.style.position = "fixed"
    
    let bookArray =[];
    bookArray.push(event.target.className.split(" ")[1])
    let bookID = bookArray[0];

    fetch(`https://www.googleapis.com/books/v1/volumes/${bookID}`)
    .then(res=>res.json())
    .then(data=>{
        let bookimg= data.volumeInfo.imageLinks.smallThumbnail;
        let bookTitle= data.volumeInfo.title;
        let bookDescription= data.volumeInfo.description;
        // console.log("999",bookTitle,bookDescription)
        popupBackground = document.createElement("div");
        popupBackground.classList.add("popup-background");
        popup.appendChild(popupBackground)

        popupBook = document.createElement("img");
        popupBook.classList.add("popup-book");
        popupBackground.appendChild(popupBook)
        popupBook.src = bookimg

        popupTitle = document.createElement("h4");
        popupTitle.classList.add("popup-title");
        popupBackground.appendChild(popupTitle)
        if(bookTitle.length > 50) {
            popupTitle.textContent = `${bookTitle.substring(0, 50)}...`;
        }else {
            popupTitle.textContent = bookTitle;
        }
        console.log({bookTitle})
        popupDescription = document.createElement("p");
        popupDescription.classList.add("popup-description");
        popupBackground.appendChild(popupDescription);
        if(bookDescription.length > 500) {
            popupDescription.textContent = `${bookDescription.substring(0, 500)}...`;
        }else {
            popupDescription.textContent = bookDescription;
        }
    })

    // .then(data=>console.log(data))
    .catch(error=> console.log("Error!: ",error))
    
}
}

// //  Function to display the Popup when click at anywhere
// function hidePopup(){
// popup.style.display = "none"
// }

function hidePopup(){
    popup.style.display = "none";
    popup.textContent = "";
    }
    // popup.removeEventListener("click",hidePopup)