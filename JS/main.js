let elList = document.querySelector('.list');




const  renderMovie = (movie) => {
    let elItem = document.createElement('li');
    let card  = ` 
        <div class="card mb-3" style="width: 18rem;">
        <iframe height="200" src="https://www.youtube.com/embed/${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text text-truncate">${movie.summary}</p>
                <p class="card-text text-truncate">${movie.imdbRating}</p>
                
            </div>
        </div>
    `
    elItem.innerHTML = card;
    elList.appendChild(elItem);
}



const main = (movies, limit = movies.length) => {
    for (let i = 0; i < limit; i++) {
        let movieTrailer = movies[i].trailer.split('=')[1];
        let movieObj = {
            "title": movies[i].title,
            "year": movies[i].year,
            "categories": movies[i].categories,
            "summary": movies[i].summary,
            "imdbId": movies[i].imdbId,
            "imdbRating": movies[i].imdbRating,
            "runtime": movies[i].runtime,
            "language": movies[i].language,
            "trailer": movieTrailer,
            "bigPoster": movies[i].bigPoster,
            "smallPoster": movies[i].smallPoster
          }
          renderMovie(movieObj);
    }
}

main (movies, 10)