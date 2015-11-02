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
        title:'try new digital products!',
        description: 'Be one of the first to test new products and services, even before they are open to the public!',
        link:'https://idealabsteam.typeform.com/to/AMXwGi',
        image: 'products',
        color: 'blue'
      },
      {
        id:'2',
        title: 'get hired!',
        description:'The startups are growing and are in need for talent. Don’t miss out on the job posts from up and coming startups!', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        image: 'jobs',
        color: 'green'
      },
      {
        id:'3', 
        title: 'connect you!',
        description:'Do you know someone we should definitely meet? Let’s talk!', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        image: 'connection',
        color: 'red'
      },
      {
        id:'4', 
        title: 'invest in startups!',
        description:'Startups are always looking for funding. Don’t miss your chance and invest early on.', 
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        image: 'investor',
        color: 'green'
      },
      {
        id:'5', 
        title:'join the mentor network!',
        description:'We are looking to grow our mentor network focusing on quality rather than quantity.',
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        image: 'network',
        color: 'red'
      },
      {
        id:'6', 
        title:'partner with you!',
        description:'We are open for partnering opportunities. So if you think we should work together, let us know.',
        link:'https://idealabsteam.typeform.com/to/MU2yKh',
        image: 'partner',
        color: 'blue'
      }
    ];
  });