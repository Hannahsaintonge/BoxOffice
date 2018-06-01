"use strict";

angular
// .module("ng-app='name'", [])ngRounte connects to the view
    .module("app", ["ngRoute"])
  //register .config component, first parameter is anonymous func and take $routeProvider as parameter
    .config(($routeProvider) => {
        //Target $routeProvider, run when() method. Two parameters- route name as string 
        //and object with route properties like controller and template
        $routeProvider
        .when("/watchlist-page", {
            template: "<watchlist-page></watchlist-page>"
        })
        .when("/search-criteria", {
            template: "<search-criteria></search-criteria>"
        })
        // otherwise defines what the router should do for unknows
       .otherwise({ redirectTo: "/search-criteria" });
    })