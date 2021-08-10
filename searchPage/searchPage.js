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
            alert("write a key word")
        }
        else {
    for(let i=0; i<=10;i++){
    let BookTitle=data.items[i].volumeInfo.title;
    let BookDesciption=data.items[i].volumeInfo.desciption;
    let BookImg=data.items[i].volumeInfo.imageLinks.smallThumbnail;
    
     card=document.createElement("div")
     card.classList.add("card")

     cardImage=document.createElement("img")
      cardImage.classList.add("card")
     cardImage.innerHTML=BookImg;
    
     cardContent=document.createElement("div")
     cardContent.classList.add("card-content")
     

     cardContentTitle=document.createElement("h4")
     cardContentTitle.classList.add("card-content-title")
     cardContentTitle.innerHTML=BookTitle;

     cardContentDesciption=document.createElement("p")
     cardContentDesciption.classList.add("card-content-description")
     cardContentDesciption.innerHTML=BookDesciption;
     
     resultsArea.appendChild(card)
     card.appendChild(cardImage)
     resultsArea.appendChild(cardContent)
     cardContent.appendChild(cardContentTitle)
     cardContent.appendChild(cardContentDesciption)

    }
        }
    })
    .catch(error => console.log("Error:",error))
}




