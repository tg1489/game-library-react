

// Navigation Buttons
function addClick() {
  window.open("add.html", "_self");
}
function homeClick(){
  window.open("index.html", "_self");
}
function recordsClick(){
  window.open("records.html", "_self");
}
function underConstruction(){
  alert("Under Construction")
}
function notesClick() {
  window.open("/notes", "_self");
}



// Postman Change Image
function changeImage() {
  document.getElementById('letter-to-zelda').src='img/postman.png';
// <img id="letter-to-zelda" src="img/Letter%20to%20Zelda1.png" border="0" onclick="this.src='img/postman.png';">-->
}

// Snowflake
document.getElementById('btn').style.color = 'powderblue';










// Add Game Template


let ourForm = document.getElementById("formid");

let ourGame = document.getElementById("gameid");

let frame2023 = document.getElementById("iFrameId").contentWindow.document.getElementById("right-side-id");
// document.getElementById("").appendChild(frame2023);

ourForm.addEventListener("click", () => {

  addGameToPage(ourGame.value)
});

function addGameToPage (x){
  let ourHTML = `<section id="section">
      <div class="row">
        <div class="column">
          <div class="card">
            <center> <img class="thumbnail" src="img/Zelda.png" alt="box art"> </center>
            <h3 class="game-title-heading3">${x}</h3>
          </div>
        </div>
      </div>
    </section>`

   frame2023.insertAdjacentHTML("beforeend", x)
}




// Secret Text
// function secretText() {
//   document.getElementById('demo').innerHTML = 'Hello JavaScript!'
//   }



// GAME SEARCH WEBSITE

//
//
// const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
// const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";
//
//
// const main = document.getElementById("section");
// const form = document.getElementById("form");
// const search = document.getElementById("query");
//
// returnMovies(APILINK)
// function returnMovies(url){
//   fetch(url).then(res => res.json())
//     .then(function(data){
//       console.log(data.results);
//       data.results.forEach(element => {
//         const div_card = document.createElement('div');
//         div_card.setAttribute('class', 'card');
//
//         const div_row = document.createElement('div');
//         div_row.setAttribute('class', 'row');
//
//         const div_column = document.createElement('div');
//         div_column.setAttribute('class', 'column');
//
//         const image = document.createElement('img');
//         image.setAttribute('class', 'thumbnail');
//         image.setAttribute('id', 'image');
//
//         const title = document.createElement('h3');
//         title.setAttribute('id', 'title');
//
//         const center = document.createElement('center');
//
//         title.innerHTML = `${element.title}`;
//         image.src = IMG_PATH + element.poster_path;
//
//         center.appendChild(image);
//         div_card.appendChild(center);
//         div_card.appendChild(title);
//         div_column.appendChild(div_card);
//         div_row.appendChild(div_column);
//
//         main.appendChild(div_row);
//       });
//     });
// }
//
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   main.innerHTML = '';
//
//   const searchItem = search.value;
//
//   if (searchItem) {
//     returnMovies(SEARCHAPI + searchItem);
//     search.value = "";
//   }
// });








