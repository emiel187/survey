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
        image: 'https://static.pexels.com/photos/154/people-apple-iphone-writing-large.jpg'
      },
      {
        id:'2',
        title: 'Company',
        description:'I\'m a company looking for new digital products', 
        
        link:''
      },
      {
        id:'3', 
        title: 'Jobs',
        description:'I want to work for startups', 
        link:'',
        image: 'https://static.pexels.com/photos/7369/startup-photos.jpg'
      },
      {
        id:'4', 
        title:'I know someone you really should meet', 
        link:''
      },
      {
        id:'5', 
        subtitle:'Mentor',
        description:'I would be a good mentor for a startup',
        link:'',
        image: 'https://static.pexels.com/photos/527/man-person-people-train.jpg'
      },
      {
        id:'6', 
        title:'I would like to invest in startups',
        subtitle:'Investor',
        link:'',
        image: 'https://static.pexels.com/photos/1334/businessman-fashion-suit-jacket-large.jpg'
      },
      {
        id:'7', 
        title:'I would like to partner up with idealabs', 
        link:''
      },
    ];
  });