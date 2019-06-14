import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';

let heroModule = angular.module('game', [
  uiRouter,
])

  .component('game', gameComponent)

  .name;

export default heroModule;
