"use strict";
// console.log("search working");
const searchCriteria = {
    template: `
    
    <nav class="main-nav">
        <ul>
          <li class="logo">Box Office</li>        
          <li class="face"><i class="material-icons">face</i>movieluvr68</li>
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
            <div class="grid-1 dropdown">
                <p class="description">Description:</p>
                <div class="dropdown-content">
                    <p>{{item.overview}}</p>
                </div>
            </div>
            <img class="grid-2" ng-src="https://image.tmdb.org/t/p/w200/{{ item.poster_path }}"/>
        </div>
      </div>

    </div>    
    `,

    controller: ["MovieService", function (MovieService) {
        const vm = this;
        //check back to see if need below array
        // vm.movieInfo = [];
        // this is the ng-click from our search button, takes the userInput as a parameter
        vm.filterSearch = function (userInput) {
            // console.log(userInput);
            //controller getMovie method takes the userInput from above then using the .then method passing the API response as parameter
            MovieService.getMovie(userInput).then((response) => {
                // console.log(response);
                // initializing movieList variable and storing the response.data.results in it
                vm.movieList = response.data.results;
                console.log(vm.movieList);
            });
        }
        // ng-click calls on this addWatchList method and passes the data to our service through .setWatchList method with 
        //the  addedFavs as the parameter
        vm.addWatchList = function (addedFavs) {
            MovieService.setWatchList(addedFavs)
        };

    }]
};

angular
    .module("app")
    .component("searchCriteria", searchCriteria);
