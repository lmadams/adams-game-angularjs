import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rankComponent from './rank.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('rank', {
      url: '/rank',
      component: 'about'
    });
})

.component('about', rankComponent)
  
.name;

export default aboutModule;
