/*Fetching from Server*/

const btnSearch=document.getElementById("searchBtn");

//Existing Fav movies

const obj=Object.keys(localStorage);

if(obj.length) {
    for(let i=0;i<obj.length;i++){
        
        try{
            const values=JSON.parse(localStorage.getItem(obj[i]));
            if(!values.Year) continue;
            const title1=values.Title;
            const startCard=document.createElement("div");
            startCard.classList.add("movie-card");
            const favoriteLocation = document.getElementById("favorites");
            favoriteLocation.append(startCard);

            startCard.innerHTML = `<img src="${values.Poster}" alt = "${values.imbdID}">`;
            startCard.innerHTML += `<h3>${values.Title}</h3>`;
            startCard.innerHTML += `<p>${values.Year}</p>`;
            startCard.innerHTML += `<button class="remove1">Remove</button>`;

            const removerBtn= startCard.querySelector(".remove1");

            removerBtn.addEventListener("click", function () {
                localStorage.removeItem(values.Title);
                this.parentElement.remove();
            })

        }
        catch (error){
            continue;
        }
    }
}


//Search button functionality

btnSearch.addEventListener("click", function () {

    const wordSearched=document.getElementById("searchInput");
    const location=document.getElementById("movieResults");
    location.innerHTML =``;
    const favoriteLocation = document.getElementById("favorites");

    const baseURL="http://www.omdbapi.com/";
    const searchedURL ="?s=" + wordSearched.value;
    const apikeyURL= "&apikey=7ccd2766";
    const URL = baseURL + searchedURL + apikeyURL;

    

    
    
    fetch(URL)
    .then(response => response.json())
    .then(data => {

        if (data.Response === 'False') {

            location.innerHTML = `<div><h2>No Such Movies Found! </h2> <p> Search for something else then?</p></div>`;
            return Promise.reject();

        } else {
            
            const arr = data.Search;

            // Render movie cards
            for (let i = 0; i < arr.length; i++) {

                let x = arr[i];
                const title = x.Title;
                const year = x.Year;
                const cardId = x.imbdID;
                const imgURL = x.Poster;

                const card = document.createElement("div");
                card.classList.add("movie-card");

                location.append(card);
                card.innerHTML += `<img src="${imgURL}" alt="${cardId}">`;
                card.innerHTML += `<h3>${title}</h3>`;
                card.innerHTML += `<p> ${year}</p>`;
                card.innerHTML += `<button class="addToFav">Add to Favorites</button>`;

                // Add to Favorites functionality
                const btnFav = card.querySelector(".addToFav");

                btnFav.addEventListener("click", function () {

                    if (localStorage.getItem(title)) {
                        alert(`${title} is already added to Favorite`);
                        return;
                    }
                    const favCard = document.createElement("div");

                    favCard.classList.add("movie-card");
                    favoriteLocation.append(favCard);

                    favCard.innerHTML += `<img src="${imgURL}" alt="${cardId}">`;
                    favCard.innerHTML += `<h3>${title}</h3>`;
                    favCard.innerHTML += `<p> ${year}</p>`;
                    favCard.innerHTML += `<button class="remove1">Remove</button>`;

                    localStorage.setItem(title, JSON.stringify(x));

                    const btnRemove = favCard.querySelector(".remove1");
                    btnRemove.addEventListener("click", function () {
                        this.parentElement.remove(); 
                        localStorage.removeItem(title); 

                    });
                });
            }
        }
    })
    .catch(error => {
        console.log("Error occured", error);
    });

})
