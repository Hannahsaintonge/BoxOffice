"use strict";
// console.log("search working");
const searchCriteria = {
    template: `

    <section class="search-container">
      <input type="text" placeholder="Search" class="search-bar" ng-model="searchInput">
      <button ng-click="$ctrl.filterSearch(searchInput)">Search</button>
      <p>Search by genre (i.e. 'horror', 'comedy', 'romance' etc)</p>
    </section>
    <p> Title: {{$ctrl.searchedMovie.title}}</p>
    <img ng-src="https://image.tmdb.org/t/p/w200/{{ $ctrl.searchedMovie.poster_path }}"/>
    `,
    // <section ng-repeat="item in $ctrl.movieInfo track by $index" class="searchResults">
    // <p> Title: {{ item.title }}</p>
    // <h4>Description: {{ item.overview }} </h4>
    // <section class="photoSection">
    // <img ng-src="https://image.tmdb.org/t/p/w200/{{ item.poster_path }}"/>
    // </section>
    controller: ["MovieService", function(MovieService){
        const vm = this;
        vm.movieInfo = [];
        MovieService.getMovie().then((response) => {
            // console.log(response.data);
            vm.awesomeData = response.data.results;
            vm.awesomeData.forEach((x) => {
                vm.movieInfo.push({
                  title: x.title
                }); 
            });
        });



        vm.filterSearch = function(searchParameter) {
            // let searchInput = {};
            // console.log(searchParameter);
            for (let i = 0; i < vm.awesomeData.length; i++) {
                if(searchParameter === vm.awesomeData[i].title){
                vm.searchedMovie = vm.awesomeData[i];
                }
            }
            console.log(vm.searchedMovie);
        }

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