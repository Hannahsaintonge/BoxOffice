"use strict";
const searchCriteria = {
    template: `
    
    <nav class="main-nav">
        <ul>
          <li class="logo">Box Office</li>        
          <li class="face"><i class="material-icons">face</i>movieluvr68</li>
          <a href="#!/watchlist-page">View Watchlist</a>
        </ul>
    </nav>

    <p class="tagline">stream and search any movie, anywhere, anytime <br> ... always</br></p>
    
    <div class="content-container">        
        <form class="search-container" on-submit="$ctrl.filterSearch(searchInput)">
          <div class="searchbar-input-button"> 
            <input type="text" placeholder="Search by keyword" class="search-bar" ng-model="searchInput">
            <button ng-click="$ctrl.filterSearch(searchInput)" class="search-button"><i class="fa fa-search"></i></button>
          <div>
        </form>
    </div> 
    <movie-list movie-list="$ctrl.movieList"></movie-list>   
    `,

    controller: ["MovieService", function (MovieService) {
        const vm = this;
        // this is the ng-click from our search button, takes the userInput as a parameter
        vm.filterSearch = function (userInput) {
            //controller getMovie method takes the userInput from above then using the .then method passing the API response as parameter
            MovieService.getMovie(userInput).then((response) => {
                // initializing movieList variable and storing the response.data.results in it
                vm.movieList = response.data.results;
                console.log(vm.movieList);
            });
        }
    }]
};

angular
    .module("app")
    .component("searchCriteria", searchCriteria);
