"use strict";

const movieList = {
    bindings: {
        movieList: "<"
    },
    template:`
    <div class="movie-container">
    <div ng-repeat="item in $ctrl.movieList"> 
      <p class="grid-1 title">{{item.title}} </p>
        <div class="grid-1">
          <a href="" ng-click="$ctrl.addWatchList(item)" class="add-watchlist">Add to Watchlist</a>
        </div>
        <div class="grid-1 dropdown">
            <p class="description">See Description</p>
            <div class="dropdown-content">
                <p class="item-description">{{item.overview}}</p>
            </div>
        </div>
        <img class="grid-2" ng-src="https://image.tmdb.org/t/p/w200/{{ item.poster_path }}"/>
    </div>
  </div>
  `,
controller: ["MovieService", function(MovieService) {
    const vm = this;
    // ng-click calls on this addWatchList method and passes the data to our service through .setWatchList method with 
    //the  addedFavs as the parameter
    vm.addWatchList = function(addedFavs) {
        MovieService.setWatchList(addedFavs);
    };
}]
};
angular
    .module("app")
    .component("movieList", movieList);