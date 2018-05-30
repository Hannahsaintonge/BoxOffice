"use strict";
console.log("search working");
const searchCriteria = {
    template: `
    <div class="title" ng-repeat="item in $ctrl.awesomeData">
        <h3>Title: {{ item.title}} </h3>
        <section class="photo">
            <img ng-src="https://image.tmdb.org/t/p/w200/{{ item.poster_path }}"/>
        </section>
        <p> {{item.genres[0].name}} </p>
        <h4>Description: {{ item.overview }} </h4>
    </div>
    `,
    controller: ["MovieService", function(MovieService){
        const vm = this;
        // vm.movieInfo = [];
        MovieService.getMovie().then((response) => {
            console.log(response.data);
            vm.awesomeData = response.data.results;
            // response.data.forEach((x) => {
            //     vm.movieInfo.push({
            //         title: x.title
            //     });
            // });
        });
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