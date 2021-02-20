const input = document.querySelector(`.input-keyword`);
const button = document.querySelector(`.search-button`);
button.addEventListener(`click`, function () {
  fetch(`http://www.omdbapi.com/?apikey=515b0ae4&s=${input.value}`)//fetch()adalah method yang mengembalikan sebuah Promise
    .then(response => response.json())//karena masih pending dan menghasilkan Promise
    // maka harus di .then lagi
    .then(response => {
      let cards = ``;
      const movies = response.Search;
      movies.forEach(movie => {
        cards += showFilms(movie);
      });
      document.querySelector(`.movie-container`).innerHTML = cards;

      const button = document.querySelector(`.container`);
      button.addEventListener(`click`, function (e) {
        if (e.target.classList.contains(`modal-detail-button`)) {
          fetch(`http://www.omdbapi.com/?apikey=515b0ae4&i=${e.target.dataset.imdb}`,{method: `get`})
            .then(response => response.json())
            .then(result => {
              const movieDetail = showCards(result);
              document.querySelector(`.modal-body`).innerHTML = movieDetail;
            });
        }
      });
      
    });
});

function showFilms(movie) {
  return /*html*/`
        <div class="col-md-4 my-3">
          <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#Moviedetailmodal" data-imdb="${movie.imdbID}">See Details</a>
            </div>
          </div>
        </div>
      `
};

function showCards(result) {
  return /*html*/`
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${result.Poster}" class="img-fluid">
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${result.Title} (${result.Year})</h4></li>
                      <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                      <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                      <li class="list-group-item"><strong>Writer : </strong>${result.Writer}</li>
                      <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
                    </ul>
                  </div>
                </div>
              </div>
              `
}