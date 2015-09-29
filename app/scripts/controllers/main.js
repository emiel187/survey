'use strict';

/**
 * @ngdoc function
 * @name surveyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyApp
 */
angular.module('surveyApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$state',
    function ($scope, $rootScope, $state) {

    $scope.open = function(survey){
      $rootScope.survey = survey;
    	console.log('open ',survey.title);
    	$state.go('survey', {id: survey.id });
    };
  }]);
