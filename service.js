"use strict";
function MovieService($http, $location) {
    let movieData = {};
    const getMovie = (searchInput) => {
        return $http ({
            method: "GET",
            //url: "https://api.themoviedb.org/3/movie/popular?api_key=cab156d1e88036f2189b1c07c86428d5&language=en-US&page=1"
            url: `https://api.themoviedb.org/3/search/movie?api_key=cab156d1e88036f2189b1c07c86428d5&language=en-US&query=${searchInput}&page=1&include_adult=false`
        }).then((response) => {            
            movieData = response;
            return movieData;
        });
    };
    let watchListArray = [];

    const setWatchList = (addedFavs) => {
        console.log(addedFavs);
        watchListArray.push(addedFavs);
    }
    //set up getter
    //getter returns watchlist items

    const getWatchList = () => {
        console.log(watchListArray);
        return watchListArray;
    }


    return {
        getMovie,
        setWatchList,
        getWatchList
    };

}

angular 
    .module("app")
    .factory("MovieService", ["$http", MovieService]);