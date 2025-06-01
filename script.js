const movies = {
  action: ["Mad Max: Fury Road", "John Wick", "The Dark Knight"],
  romance: ["La La Land", "Titanic", "The Notebook"],
  "sci-fi": ["Interstellar", "Inception", "The Matrix"]
};

function showMovies() {
  const genre = document.getElementById("genre").value;
  const list = document.getElementById("movieList");
  list.innerHTML = "";

  movies[genre].forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";
    div.textContent = movie;
    list.appendChild(div);
  });
}