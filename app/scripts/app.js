'use strict';

/**
 * @ngdoc overview
 * @name surveyApp
 * @description
 * # surveyApp
 *
 * Main module of the application.
 */
angular
  .module('surveyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('surveys', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('survey', {
        url: '/:id',
        templateUrl: 'views/survey.html'
      }
    );

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');
  })
  .filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  })
  .run(function($rootScope){
    $rootScope.surveys = [
      {
        id:'1', 
        title:'Tester',
        description: 'I want to test new digital products',
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'blue'
      },
      {
        id:'2',
        title: 'Company',
        description:'My company is looking for new digital products', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'green'
      },
      {
        id:'3', 
        title: 'Jobs',
        description:'I want to work for startups', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'red'
      },
      {
        id:'4', 
        title: 'Connection',
        description:'I know someone you really should meet', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'blue'
      },
      {
        id:'5', 
        title:'Mentor',
        description:'I would be a good mentor for a startup',
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'green'
      },
      {
        id:'6', 
        title:'Investor',
        description:'I would like to invest in startups',
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'red'
      },
      {
        id:'7', 
        title: 'Partner',
        description:'I would like to partner up with idealabs', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'blue'
      },
      {
        id: '8',
        title:'Good guy greg',
        description:'I just like to fill in surveys', 
        link: 'https://idealabsteam.typeform.com/to/MU2yKh',
        color: 'green'
      }
    ];
  });