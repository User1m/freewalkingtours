angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.login_modal = modal;
  });

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/share.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.share_modal = modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.login_modal.hide();
  };
  // Triggered in the login modal to close it
  $scope.closeShare = function() {
    $scope.share_modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.login_modal.show();
  };

  // Open the login modal
  $scope.share = function() {
    $scope.share_modal.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('CityCtrl', function($scope, $stateParams) {
  $scope.city = {
    name : $stateParams.id
  }
})
.controller('CitiesCtrl', function($scope) {
  $scope.cities = {
    "usa": [
    {title:"New York", id:"new_york"},
    {title:"San Francisco", id:"san_francisco"},
    ],

    "europe" : [
    {title:"Amsterdam", id:"amsterdam"},
    {title:"Barcelona", id:"barcelona"},
    {title:"Berlin", id:"berlin"},
    {title:"Brussels", id:"brussels"},
    {title:"Copenhagen", id:"copenhagen"},
    {title:"Dublin", id:"dublin"},
    {title:"Edinburgh", id:"edinburgh"},
    {title:"Hamburg", id:"hamburg"},
    {title:"Jerusalem", id:"jerusalem"},
    {title:"Lisbon", id:"lisbon"},
    {title:"Liverpool", id:"liverpool"},
    {title:"London", id:"london"},
    {title:"Madrid", id:"madrid"},
    {title:"Munich", id:"munich"},
    {title:"Paris", id:"paris"},
    {title:"Prague", id:"prague"},
    {title:"Tel Aviv", id:"tel_aviv"},
    {title:"St. Petersburg", id:"st_petersburg"}
    ],

    "asia" : [
    {title:"Bangkok", id:"bangkok"},
    {title:"Hanoi", id:"hanoi"},
    {title:"Hong Kong", id:"hong_kong"},
    {title:"Kuala Lumpur", id:"kuala_lumpur"},
    {title:"Tokyo", id:"tokyo"},
    {title:"Seoul", id:"seoul"},
    {title:"Shanghai", id:"shanghai"},
    {title:"Singapore", id:"singapore"}
    ],

    "austrailia": [
    {title:"Sydney", id:"sydney"}
    ]
  }
  $scope.fav = function(){
    alert("favorited!");
  }
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  { title: 'Reggae', id: 1 },
  { title: 'Chill', id: 2 },
  { title: 'Dubstep', id: 3 },
  { title: 'Indie', id: 4 },
  { title: 'Rap', id: 5 },
  { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
