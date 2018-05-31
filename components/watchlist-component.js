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
    
    <section>
        <ul ng-repeat="item in $ctrl.movieFavs">
            <li>{{ item.title }}</li>
        </ul>
        <a href="#!/search-criteria">Back to search</a>
    </section>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        vm.movieFavs = MovieService.getWatchList(); 
        console.log(vm.movieFavs);
    }]
}


angular
    .module("app")
    .component("watchlistPage", watchlistPage);