const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchOutput = document.getElementById('searchOutput');


function searchAction(){
    fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=9360d14e`)
        .then(resp => resp.json())
        .then(data => {
            movies = data.Search;
            let output = '';
            movies.forEach(movie => {               
                output += 
                `
                <div class="col-md-3 text-center bg-info py-2">
                    <img class="img-fluid"  height="350" width="auto" src="${movie.Poster}" alt="">
                    <h2>${movie.Title}</h2>
                    <h6>Year: ${movie.Year}</h6>
                    <button onclick='movieDetails("${movie.imdbID}")' class="btn btn-primary">Details</button>
                </div>
                `;
            });
            searchOutput.innerHTML = output;
        })
}

function movieDetails(id){
    sessionStorage.setItem('imdbId', id);
    window.location = 'single-movie.html';
}

searchForm.addEventListener('submit', (event) => {
    searchAction();
    event.preventDefault();
})