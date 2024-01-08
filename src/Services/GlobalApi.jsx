import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='70b2a0a4066c843be383d2265baf10dc'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=70b2a0a4066c843be383d2265baf10dc';

//https://api.themoviedb.org/3/trending/all/day?api_key=70b2a0a4066c843be383d2265baf10dc
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}