const movieContainer = document.getElementById("movieContainer");

const chargeCards = (data) => {
    data.forEach((moviesCard) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("moviesCard");

        const poster = document.createElement("img");
        poster.src= moviesCard.poster;
        
        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.innerHTML = moviesCard.title;

        const year = document.createElement("p");
        year.classList.add("year");
        year.innerHTML = `Year: ${moviesCard.year}`;

        const director = document.createElement("p");
        director.classList.add("director");
        director.innerHTML = `Director: ${moviesCard.director}`;
        
        const duration = document.createElement("p");
        duration.classList.add("duration");
        duration.innerHTML = `Duration: ${moviesCard.duration}`;

        const genre = document.createElement("p");
        genre.classList.add("genre");
        genre.innerHTML = `Genre: ${moviesCard.genre}`;

        const rate = document.createElement("p");
        rate.classList.add("rate");
        rate.innerHTML = `Rate: ${moviesCard.rate}`;

    
        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        movieCard.appendChild(year);
        movieCard.appendChild(director);
        movieCard.appendChild(duration);
        movieCard.appendChild(genre);
        movieCard.appendChild(rate);

    movieContainer.appendChild(movieCard);
        });
}

module.exports = chargeCards;