import angular from 'angular';
import Home from './home/home';
import Rank from './rank/rank';

let componentModule = angular.module('app.components', [
  Home,
  Rank
])

  .name;

export default componentModule;
