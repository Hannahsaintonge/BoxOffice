"use strict";
{
  function showList() {
    return {
      restrict: "A",
      
      link: ($scope, $element, $attrs) => {
        $element.on("click", function() {
            document.getElementsByClassName("movie-container")[0].classList.add = "show"
          
        });
      
      }
    }
  }
  
  angular
    .module("app")
    .directive("showList", showList);
}