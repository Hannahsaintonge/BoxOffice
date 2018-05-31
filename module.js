"use strict";
// console.log("module working");
angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
        .when("/watchlist-page", {
            template: "<watchlist-page></watchlist-page>"
        })
        .when("/search-criteria", {
            template: "<search-criteria></search-criteria>"
        })
       .otherwise({ redirectTo: "/search-criteria" });
       
        

    })