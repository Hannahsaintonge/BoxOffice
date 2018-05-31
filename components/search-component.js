"use strict";
// console.log("search working");
const searchCriteria = {
    template: `
    
    <nav class="main-nav">
        <ul>
        <li class="logo">Box Office</li>
        
        <li class="face">
        <i class="material-icons">face</i>movieluvr68
        </li>
        <a href="#!/watchlist-page">View Watchlist</a>
        </ul>
    </nav>
    <p>this is our tagline</p>
    
    <div class="content-container">
        
        <form class="search-container" on-submit="$ctrl.filterSearch(searchInput)">
        <input type="text" placeholder="Search by keyword" class="search-bar" ng-model="searchInput">
        <button ng-click="$ctrl.filterSearch(searchInput)" class="search-button"><i class="fa fa-search"></i></button>
        </form>

    <div class="movie-container">
        <div ng-repeat="item in $ctrl.movieList"> 
            <p class="grid-1">{{item.title}} </p>
            <div class="grid-1">
            <a href="" ng-click="$ctrl.addWatchList(item)">Add to Watchlist</a>
            </div>
            <img class="grid-2" ng-src="https://image.tmdb.org/t/p/w200/{{ item.poster_path }}"/>
        </div>
    </div>
    </div>
    
    `,
 
    controller: ["MovieService", function(MovieService){
        const vm = this;
        vm.movieInfo = [];
        vm.filterSearch = function(userInput) {
            // console.log(userInput);
            MovieService.getMovie(userInput).then((response) => {
                // console.log(response);
                vm.movieList = response.data.results;
                console.log(vm.movieList);
            });
        }

        vm.addWatchList = function(addedFavs) {
            MovieService.setWatchList(addedFavs)
            };
    
    }]
    };

angular
    .module("app")
    .component("searchCriteria", searchCriteria);
    // Working with original url
    // <div class="title">
    //     <h3>Title: {{ $ctrl.title.title }} </h3>
    //     <section class="photo">
    //         <img ng-src="https://image.tmdb.org/t/p/w200/{{ $ctrl.title.poster_path }}"/>
    //     </section>
    //     <p> {{$ctrl.title.genres[0].name}} </p>
    //     <h4>Description: {{ $ctrl.title.overview }} </h4>
    // </div>