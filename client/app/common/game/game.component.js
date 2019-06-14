import template from './game.html';
import controller from './game.controller';
import './game.scss';

let gameComponent = {
  bindings: {
    cards: '=',
    player: '@',
    endgame: '&'
  },
  template,
  controller
};

export default gameComponent;
