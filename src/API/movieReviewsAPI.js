import axios from 'axios';

const URL = 'https://movie-sage-backend.onrender.com';

export async function readMovieReviews () {
    // This will read the server's at https://movie-sage-backend.onrender.com/movies
    const response = await axios.get(`${URL}/movies`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    }
}

export const readSingleMovieReview = async (id) => {
    // This will read the server's at https://movie-sage-backend.onrender.com/movies/id
    const response = await axios.get(`${URL}/movies/${id}`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    }
}

export const createMovieReview = async (movie) => {
    // This will read the server's at https://movie-sage-backend.onrender.com/movies
    const response = await axios.post(`${URL}/movies`, movie);

    return response;
}

export const updateMovieReview = async (id, movie) => {
    // This will read the server's at https://movie-sage-backend.onrender.com/movies/id
    const response = await axios.put(`${URL}/movies${id}`, movie);

    return response;
}

export const deleteMovieReview = async (id) => {
    // This will read the server's at https://movie-sage-backend.onrender.com/id
    const response = await axios.delete(`${URL}/movies/${id}`);

    return response;
}

export const readCarouselData = async () => {
    // This will read the server at https://movie-sage-backend.onrender.com/carouselData
    const response = await axios.get(`${URL}/carouselData`);

    if (response.status === 200) {
        return response.data;
    } else {
        return;
    }
}

export const readMoviesByGenre = async (genres) => {
    // This will read the server at https://movie-sage-backend.onrender.com/moviesByGenre?genres=ex1,ex2
    try {
        const response = await axios.get(`${URL}/moviesByGenre`, {
            params: { genres: genres.join(',') }
        });

        if(response.status === 200) {
            return response.data;
        } else {
            return;
        }
        // console.log('Movies by Genres:', data);
    } catch (error) {
        console.error('Error fetching movies by genres:', error.response?.data || error.message);
    }
}