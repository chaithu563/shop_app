﻿angular.module('myApp.component', [])
   .directive('myDraggable', ['$document', function($document) {
       return {
           //priority: 100001,
           restrict:'A',
           link: function(scope, element, attr) {
               var startX = 0, startY = 0, x = scope.item.x, y = scope.item.y;

               element.css({
                   position: 'absolute',
                   border: '1px solid red',
                   backgroundColor: 'lightgrey',
                   cursor: 'pointer'
               });

               element.on('mousedown', function(event) {
                   // Prevent default dragging of selected content
                   event.preventDefault();
                   startX = event.pageX - x;
                   startY = event.pageY - y;
                   $document.on('mousemove', mousemove);
                   $document.on('mouseup', mouseup);
               });

               function mousemove(event) {
                   y = event.pageY - startY;
                   x = event.pageX - startX;
                   element.css({
                       top: y + 'px',
                       left:  x + 'px'
                   });
               }

               function mouseup() {
                   $document.off('mousemove', mousemove);
                   $document.off('mouseup', mouseup);
               }
           }

       };
   }])

  
      .directive('myTest', ['$compile', function ($compile) {
          return {
              scope: {
                 

              },
              template: "<div>hello chaitanya</div>",


              restrict: 'E',
              transclude: true,

              link: function (scope, element, attr, controller) {
                  var data;


              }


          }
      }]);