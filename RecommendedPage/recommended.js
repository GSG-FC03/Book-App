//  DOM get the books container
const bookArea = document.querySelector(".container")

//  An event listener that applies function when the page loaded
document.addEventListener("DOMContentLoaded", randomBook);

//  Function to get images from API
function randomBook(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=random")
    .then(res=>res.json())
    .then(data=> {
        for(let i=0; i<=10; i++){
            let img=data.items[i].volumeInfo.imageLinks.smallThumbnail;
            book = document.createElement("div")
            book.classList.add("book")

            bookImage = document.createElement("img")
            bookImage.classList.add("book-image")

            bookArea.appendChild(book)
            book.appendChild(bookImage)
            bookImage.src = img
            console.log(img)

        }
    })
     .catch(error=>console.log("There is an error which is",error))
}
