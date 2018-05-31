"use strict";
function MovieService($http) {
    let movieData = {};
    const getMovie = () => {
        return $http ({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/popular?api_key=cab156d1e88036f2189b1c07c86428d5&language=en-US&page=1"
            //   url: "https://api.themoviedb.org/3/search/movie?api_key=cab156d1e88036f2189b1c07c86428d5&language=en-US&page=1&include_adult=false"
        }).then((response) => {            
            movieData = response;
            // console.log("working in component");
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