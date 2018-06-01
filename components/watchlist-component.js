"use strict";
const watchlistPage = {
    template: `
    <nav class="main-nav">
    <ul>
        <li class="logo">Box Office</li>
        <li class="face-watchlist">
        <i class="material-icons">face</i>movieluvr68</li>
    </ul>
    </nav>

    <section class="watchlist-box">
        <form class="watchlist-form">
            <h3>My Watchlist</h3>
            <ul ng-repeat="item in $ctrl.movieFavs">
                <li>{{ $index + 1 }}.</li>
                <li>{{ item.title }} <i class="material-icons">star</i>{{ item.vote_average }}/10 </li> 
                <li class="delete-button"><i ng-click="$ctrl.removeMovie(index);" class="material-icons">clear</i></li>
            </ul>
            
        </form>
        <a href="#!/search-criteria" class="search-back">Back to search</a>
    </section>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        // initilizing movieFavs then storing data from getWatchList method from the service 
        vm.movieFavs = MovieService.getWatchList(); 
        console.log(vm.movieFavs);
        vm.removeMovie = (index) => {
            console.log("index is working");
            vm.movieFavs.splice(index, 1);
        };
    }]
}


angular
    .module("app")
    .component("watchlistPage", watchlistPage);