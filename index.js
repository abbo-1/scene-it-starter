document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
      var movieHTML = movieArray.map(function (currentMovie){
        return `
            <div class="movie">
                              <div class="card" style="width: 18rem;">
                                      <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                                      <div class="card-body text-center">
                                          <h5 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                                          <p class="card-text">IMDB ID: ${currentMovie.imdbID}</p>
                                          <a href="#" class="btn btn-primary">Add Movie</a>
                                      </div>
                              </div>
            </div>
            `;
      });
  
      return movieHTML.join('');
    }
  
    document.getElementById('search-form').addEventListener('submit',function(e){
        e.preventDefault();
        var content = document.getElementById('movies-container');
        content.innerHTML = renderMovies(movieData);
    });

//some notes and information
    
  });