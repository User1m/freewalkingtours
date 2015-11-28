angular.module('fwt.factory', [])

.service('fwtService', function(){


})


.factory('fwtFactory', function($http, $state){

	// var app = {};

	return{

		getData: function(url){
			$http.get(url).success(function(data){
				// console.log(data);
				return data;
			});
		}
	};
});