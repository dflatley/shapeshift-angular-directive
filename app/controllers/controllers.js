angular.module('shapeshiftapp.controllers', [])

.directive('shapeshift', function () {
   return {
      restrict: "A",
      link: function (scope, element, attrs) {
		  
          // init shapeshift with no attributes
		  //$(element).shapeshift(scope.$eval(attrs.shapeshift));
			
			// init shapeshift with any/all attributes
			var shapeshiftcontainer = element.shapeshift({
				enableDrag: true,
				enableCrossDrop: true,
				minColumns: 2,
				animated: true,
				animateOnInit: false,
				animationSpeed: 225,
				animationThreshold: 100,
				colWidth: 80,
				align: "left",
				dragClone: false,
				deleteClone: true,
				maxHeight: null,
				minHeight: 400
			  });
			  
			  
           // handler for added draggable item
			shapeshiftcontainer.on( "ss-added", function(e, selected) 
			{
				//console.log(selected);
				
			});

      }
   };
})

.controller('FrontCtrl', function($scope) {
	console.log("controller...");
});