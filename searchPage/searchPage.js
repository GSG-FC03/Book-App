const searchIcon = document.querySelector(".search-icon")
const searchInput = document.querySelector(".search-input")
const resultsArea = document.querySelector(".container")
// console.log("5555",searchIcon,searchIcon,resultsArea)

searchIcon.addEventListener("click",searchResult)
function searchResult(){
    // console.log("969999",searchInput.value)  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}`)
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:",error))
}


