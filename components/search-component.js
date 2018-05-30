"use strict";
console.log("search working");
const searchCriteria = {
    template: `
    <div class="title">
        <h3>Title: {{ $ctrl.title.title }} </h3>
        <section class="photo">
            <img ng-src="https://image.tmdb.org/t/p/w200/{{ $ctrl.title.poster_path }}"/>
        </section>
        <p> {{$ctrl.title.genres[0].name}} </p>
        <h4>Description: {{ $ctrl.title.overview }} </h4>
    </div>
    `,
    controller: ["MovieService", function(MovieService){
        const vm = this;
        // vm.movieInfo = [];
        MovieService.getMovie().then((response) => {
            console.log(response.data);
            vm.title = response.data;



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