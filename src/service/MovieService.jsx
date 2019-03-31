import axios from 'axios';

export const searchMovie = title =>{
    return axios.get(`http://www.omdbapi.com/?apikey=83f5725d&s=${title}&page=1`); 
}

export const getMovieByImdb = id =>{
    return axios.get(`http://www.omdbapi.com/?apikey=83f5725d&i=${id}`)
}