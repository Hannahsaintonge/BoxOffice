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
    <section>
        <ul ng-repeat="item in $ctrl.watchListMovies">
            <li>{{ item.title }}</li>
        </ul>
    </section>
    `,
    controller: ["MovieService", function(MovieService) {
        const vm = this;
        vm.movieFavs = [];
        
    }]
}


angular
    .module("app")
    .component("watchlistPage", watchlistPage);