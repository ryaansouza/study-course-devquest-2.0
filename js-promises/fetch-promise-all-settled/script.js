const baseURL = "https://ghibliapi.vercel.app";

const loadSingleMovie = async (id) => {
    try {
        const response = await fetch(`${baseURL}/films/${id}`);

        const movie = await response.json();

        console.log(movie.title);
    } catch (error) {
        console.log("Erro ao carregar filme:", error);   
    }
}
//loadSingleMovie("2baf70d1-42bb-4437-b551-e5fed5a87abe");


const moviesIds = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
];

const loadMultipleMoviesAll = async (moviesIds) => {
    try {
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar filme com ID ${id}`);
            }
            return response.json();
        });
        const movies = await Promise.all(promises);
        console.log(movies);
    } catch (error) {
        console.log("Erro ao carregar 1 ou maisfilmes:", error);   
    }
};
//loadMultipleMovies(moviesIds);


const moviesIdsAndInvalid = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
    "filme-invalido",
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49" // My Neighbor Totoro
];

const loadMultipleMoviesAllSettled = async (moviesIds) => {
    try {
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar filme com ID ${id}`);
            }
            return response.json();
        });

        const movies = await Promise.allSettled(promises);

        console.log(movies);

        console.log("Relatorio final:");

        movies.forEach((movies, index) => {
            if (movies.status === "fulfilled") {
                console.log("Ok:", movies.value.title);
            } else {
                console.log(`Erro no filme ${moviesIdsAndInvalid[index]}`, movies.reason.message);
            }
        });

    } catch (error) {
        console.log("Erro ao carregar 1 ou maisfilmes:", error);   
    }
};
loadMultipleMoviesAllSettled(moviesIdsAndInvalid);