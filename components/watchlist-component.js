"use strict";
// console.log("watch list working");
const watchlistPage = {
    template: `
    <nav class="main-nav">
    <ul>
        <li class="logo">Box Office</li>
        <li>
        <i class="material-icons">face</i>Welcome User</li>
    </ul>
    </nav>
    <h3>My Watchlist</h3>
    
    <section class="watchlist-box>
        <form class="watchlist-form">
            <ul ng-repeat="item in $ctrl.movieFavs">
                <li>{{ item.title }}</li>
                <li><i ng-click="$ctrl.removeMovie(index);" class="material-icons">clear</i></li>
            </ul>
            <a href="#!/search-criteria">Back to search</a>
        </form>
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