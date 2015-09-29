'use strict';

/**
 * @ngdoc function
 * @name surveyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the surveyApp
 */
angular.module('surveyApp')
  .controller('SurveyCtrl', ['$scope', '$rootScope', '$state','$sce',
    function ($scope, $rootScope, $state, $sce) {
		console.log($state.params.id);
		if (!$rootScope.survey || $rootScope.survey.id != $state.params.id) {
			var survey = _.find($rootScope.surveys, {id: $state.params.id});
			console.log(survey);
			$rootScope.survey = survey;
		} else {
			console.log('survey already set?', $rootScope.survey);
		}
		
  	}
  ]);
