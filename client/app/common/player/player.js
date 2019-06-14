import angular from 'angular';
import PlayerFactory from './player.factory';

let userModule = angular.module('player', [])

  .factory('playerFactory', PlayerFactory)

  .name;

export default userModule;
