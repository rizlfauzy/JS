const input = document.querySelector(`.input-keyword`);
const button = document.querySelector(`.search-button`);
// async berfungsi agar fungsi yang awalnya dikira sync oleh javascript jadi
// async
// dan tinggal diberi tau function mana yang merupakan async dengann property await
button.addEventListener(`click`, async function () {
  const movies = await getMovies(input.value);
  updateUI(movies)
});

// event binding = agar bisa memencet elemen yang bahkan belum dibuat
const container = document.querySelector(`.container`);
container.addEventListener(`click`, async function (e) {
  if (e.target.classList.contains(`modal-detail-button`)) {
    const detail = await getDetail(e.target.dataset.imdb);
    updateDetail(detail);
  }
});

function getMovies(isi) {
  return fetch(`http://www.omdbapi.com/?apikey=515b0ae4&s=${isi}`)
    .then(response => response.json())
    .then(response => response.Search);
};

function getDetail(data) {
  return fetch(`http://www.omdbapi.com/?apikey=515b0ae4&i=${data}`, { method: `get` })
      .then(response => response.json())
      .then(result => result);
};

function updateUI(movies) {
  let cards = ``;
  movies.forEach(movie => {
    cards += showFilms(movie);
  });
  document.querySelector(`.movie-container`).innerHTML = cards;
};

function updateDetail(result) {
  const movieDetail = showCards(result);
  document.querySelector(`.modal-body`).innerHTML = movieDetail;  
};

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
};