const container = document.getElementsByTagName('div')[0];
const searchText = document.getElementsByTagName('input')[0];
const form = document.querySelector('form');

async function getMovies(movieName) {
    let data = await fetch(`https://api.tvmaze.com/search/shows?q=${movieName}`);
    // console.log(data);

    let movies = await data.json();

    console.log(movies);
    for (let i = 0; i < movies.length; i++) {
        try {
            const div = document.createElement('div');
            const heading = document.createElement('h1').innerText = movies[i].show.name;
            const poster = document.createElement('img');
            poster.setAttribute('src', movies[i].show.image.medium);

            const summary = document.createElement('p').innerText = movies[i].show.summary;

            div.append(poster);
            div.append(heading);
            div.append(summary);

            container.after(div);
        } catch (e) {
            console.log(e);
        }

    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let movieName = searchText.value;
    getMovies(movieName);
})
