// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount = JSON.parse(localStorage.getItem("amount")) || 0;
let movie = JSON.parse(localStorage.getItem("movie"));

document.getElementById("wallet").innerText = amount;

async function search() {
  document.getElementById("movies").innerHTML = null;
  let q = document.getElementById("search").value;
  let url = `https://www.omdbapi.com/?apikey=6346903a&s=${q}`;
  let res = await fetch(url);
  let results = await res.json();
  let data = results.Search;
  data.forEach((el, i) => {
    append(el, i);
  });
}

function append(el, i) {
  let container = document.getElementById("movies");
  let box = document.createElement("div");
  box.class = "movies_tab";

  let image = document.createElement("img");
  image.src = el.Poster;
  image.class = "poster";

  let title = document.createElement("p");
  title.innerText = el.Title;

  let book = document.createElement("button");
  book.class = "book_now";
  book.innerText = "Book Now";
  book.addEventListener("click",function(){
    book_movie(el);
  });

  box.append(image, title, book);
  container.append(box);
}

function book_movie(el){
    console.log("Inside Book Movie");
    localStorage.setItem("movie", JSON.stringify(el));
    window.location.href="checkout.html";
}
let id;
function debounce(delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
     search();
    },delay)
}