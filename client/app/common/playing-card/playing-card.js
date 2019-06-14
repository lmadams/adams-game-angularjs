import angular from 'angular';
import PlayingCardFactory from './playing-card.factory';

let playingCardModule = angular.module('playingcard', [])

  .factory('playingCardFactory', PlayingCardFactory)

  .name;

export default playingCardModule;
