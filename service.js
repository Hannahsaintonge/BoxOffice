"use strict";
function MovieService($http) {
    let movieData = {};
    const getMovie = () => {
        return $http ({
            method: "GET",
            // url: "https://api.themoviedb.org/3/movie/550?api_key=cab156d1e88036f2189b1c07c86428d5"
               url: "https://api.themoviedb.org/3/movie/popular?api_key=cab156d1e88036f2189b1c07c86428d5&language=en-US&page=1"
        }).then((response) => {
            movieData = response;
            return movieData;
            
        });
    };
    return {
        getMovie
    };

}

angular 
    .module("app")
    .factory("MovieService", ["$http", MovieService]);