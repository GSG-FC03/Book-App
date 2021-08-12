// data.items[0].volumeInfo.imageLinks.smallThumbnail
const searchIcon = document.querySelector(".search-icon")
const searchInput = document.querySelector(".search-input")
const resultsArea = document.querySelector(".container")





searchIcon.addEventListener("click",searchResult)
function searchResult(){
    // console.log("969999",searchInput.value)  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}`)
    .then(res=>res.json())
    .then(data =>{
        if(searchInput.value===null||searchInput.value==="")
        {
        alert("write a key word")//this santance will appear when user does't input any thing in the search bar
        }
        else {
    for(let i=0; i<=10;i++){ // used for loop to appear 10 books 
    let BookTitle=data.items[i].volumeInfo.title; // fetch title from api
    let BookDesciption=data.items[i].volumeInfo.description; // fetch description from api
    let BookImg=data.items[i].volumeInfo.imageLinks.smallThumbnail; // fetch link of image from api
    
     card=document.createElement("div") 
     card.classList.add("card")

     cardImage=document.createElement("div")
      cardImage.classList.add("card-img")

      // this section to appear the image of book from API
      imgElement=document.createElement("img")
      imgElement.classList.add("img")
      imgElement.src=BookImg;
    

     cardContent=document.createElement("div")
     cardContent.classList.add("card-content")
     
    // this section to appear the title of book from API
     cardContentTitle=document.createElement("h4")
     cardContentTitle.classList.add("card-content-title")
     cardContentTitle.innerHTML=BookTitle;

    // this section to appear the description of book from API
     cardContentDesciption=document.createElement("p")
     cardContentDesciption.classList.add("card-content-description")
     cardContentDesciption.innerHTML=BookDesciption;
     
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




