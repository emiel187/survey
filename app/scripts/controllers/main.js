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

    function openWindow(url){
      
      var newwindow=window.open(url,'name','height=400,width=700');
      if (window.focus) {newwindow.focus();}
    }

    $scope.facebook = function(survey){
      var link = 'http://survey.idealabs.be?ref='+survey.title,
          url = 'http://survey.idealabs.be';

      // name = encodeURIComponent(name);
      // description = encodeURIComponent(description);
      // picture = encodeURIComponent(picture);
      link = encodeURIComponent(link);
      url = encodeURIComponent(url);
      var fburl = 'https://www.facebook.com/dialog/feed?app_id=406116456140342&display=popup&link='+link+'&redirect_uri='+url;
      openWindow(fburl);
    };

    $scope.twitter = function(survey){
      var text = 'Mooii zo',
          url = 'http://surveys.idealabs.be', 
          hashtags = 'idealabs,startups', 
          via = 'idealabs_BE', 
          related = 'idealabs_BE,knoddecee';
      text = encodeURIComponent(text);
      url = encodeURIComponent(url);
      var twurl = 'https://twitter.com/intent/tweet?text='+text+'&url='+url+'&hashtags='+hashtags+'&via='+via+'&related='+related;
      openWindow(twurl);
    };

    $scope.linkedin = function(survey){
      var link = 'http://survey.idealabs.be',
          title = 'Help a startup out',
          summary = 'At idealabs we\'re looking for ...',
          source = 'http://www.idealabs.be';
      link = encodeURIComponent(link);

      var linkedurl = 'https://www.linkedin.com/shareArticle?mini=true&url='+link+'&title='+title+'&summary='+summary+'&source='+source;
      openWindow(linkedurl);
    };

  }]);
