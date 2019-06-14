class HomeController {

  constructor(playingCardFactory, playerFactory) {
    "ngInject";
    this.playingCardFactory = playingCardFactory;
    this.playerFactory = playerFactory;
  }

  onSubmitInitGame = () => {
    this.cards = this.playingCardFactory.getTenCards();
  };

  endgame = (score) => {
    this.playerFactory.saveScore(this.playerName, score);

    const value = window.confirm(
      `Parabéns ${this.playerName}! Você conseguiu concluir com ${score} rodadas. Deseja começar outro jogo?`
    );
    if (value) {
      this.onSubmitInitGame();
    } else {
      this.cards = null;
      this.playerName = null;
    }
  };
}

export default HomeController;
