"use strict";
console.log("search working");
const searchCriteria ={
    template: `
    <div>
    <h3></h3>
    </div>
    `,
    controller: ["MovieService", function(MovieService){
        const vm = this;
        vm.movieInfo = [];
        MovieService.getMovie().then((response) => {
            console.log(response);
        })
    }]

    }



angular
    .module("app")
    .component("searchCriteria", searchCriteria);