import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            template: require('../views/main.html')
        });

    $locationProvider.html5Mode(true);
});

export default app;