// DOM
const searchIcon = document.querySelector(".search-icon")
const searchInput = document.querySelector(".search-input")
const resultsArea = document.querySelector(".container")

// Show the search result when click at search icon
searchIcon.addEventListener("click",searchResult)

// Fetching the API  
function searchResult(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}`)
    .then(res=>res.json())
    .then(data =>{
        if(searchInput.value===null||searchInput.value==="")
        {
        alert("write a key word")//this santance will appear when user does't input any thing in the search bar
        }
        else {
           resultsArea.innerHTML = "";

    for(let i=0; i<=10;i++){ // used for loop to appear 10 books 
    let BookTitle=data.items[i].volumeInfo.title; // fetch title from api
    let BookDesciption=data.items[i].volumeInfo.description; // fetch description from api
    let BookImg=data.items[i].volumeInfo.imageLinks.smallThumbnail; // fetch link of image from api
    let id =data.items[i].volumeInfo.industryIdentifiers[0].identifier; //Book id
        
     card=document.createElement("div") 
     card.classList.add("card", id) // Give the card two class one for style the second is the ID
     card.addEventListener("click",getIdToGetDetails)

     cardImage=document.createElement("div")
    cardImage.classList.add("card-img")

      // this section to appear the image of book from API
      imgElement=document.createElement("img")
      imgElement.classList.add("img", id)
      imgElement.src=BookImg;
    

     cardContent=document.createElement("div")
     cardContent.classList.add("card-content", id)
     
    // this section to appear the title of book from API
     cardContentTitle=document.createElement("h4")
     cardContentTitle.classList.add("card-content-title")
     cardContentTitle.innerHTML=BookTitle;

    // this section to appear the description of book from API
     cardContentDesciption=document.createElement("p")
     cardContentDesciption.classList.add("card-content-description")
     cardContentDesciption.innerHTML=BookDesciption;
     
    // make the class parents and chlid
     resultsArea.appendChild(card)
     card.appendChild(cardImage)
     cardImage.appendChild(imgElement)
     card.appendChild(cardContent)
     cardContent.appendChild(cardContentTitle)
     cardContent.appendChild(cardContentDesciption)

    }
        }
    })
    .catch(error => console.log("Error:",error))
}

// Git the book ID and move result page (bookMusicPage)

function getIdToGetDetails(ele){
let cardClassList = [];
cardClassList.push(ele.target.className.split(" ")[1])
let bookId = cardClassList[0]
localStorage.setItem("bookId", JSON.stringify(bookId));
location.href="../bookMusicPage/bookMusicPage.html";
}


