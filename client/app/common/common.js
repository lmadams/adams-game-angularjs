import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './game/game';
import Player from './player/player';
import PlayingCard from './playing-card/playing-card';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Player,
  PlayingCard
])
  .name;

export default commonModule;
