import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='b00a76cddccd0896da7cd5d6c2baca07'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=b00a76cddccd0896da7cd5d6c2baca07';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}