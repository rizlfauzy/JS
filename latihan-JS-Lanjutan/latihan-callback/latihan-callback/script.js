const input = document.querySelector(`.input-keyword`);
const button = document.querySelector(`.search-button`);
button.addEventListener('click', function () { 
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=515b0ae4&s=${input.value}`,
    success: (result) => {
      const movies = result.Search
      let cards = ``;
      movies.forEach(movie => {
        cards += /*html*/`
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
      });
      document.querySelector(`.movie-container`).innerHTML = cards;
  
      const films = document.querySelectorAll(`.modal-detail-button`);
      films.forEach(movie => {
        movie.addEventListener('click', function () {
          $.ajax({
            url: `http://www.omdbapi.com/?apikey=515b0ae4&i=${movie.dataset.imdb}`,
            success: (result) => {
              const movieDetail = /*html*/`
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
              `;
              document.querySelector(`.modal-body`).innerHTML = movieDetail;
            },
            error(e) {
              console.log(e.responseText);
            }
          })
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    }
  });
 })




