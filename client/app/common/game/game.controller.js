class GameController {

  constructor() {
    this.round = 0;
    this.firstCardSelected = null;
    this.cardsSelected = [];
  }

  onClickCard = (card, index) => {
    // Selected cards have the index
    if (this.cardsSelected.includes(index)) {
      return;
    }

    // First card from round selected
    if (this.firstCardSelected == null) {
      this.firstCardSelected = card;
      this.cardsSelected.push(index);
      return;
    }

    this.cardsSelected.push(index);

    // Validade is the Same Card
    setTimeout(() => {
      if (this.firstCardSelected !== card) {
        this.cardsSelected.pop();
        this.cardsSelected.pop();
      }

      this.firstCardSelected = null;
      this.round = this.round + 1;
    });

    this.validadeEndGame();
  };

  validadeEndGame = () => {
    if (this.cardsSelected.length === 20) {
      this.closeGame();
    }
  };

  closeGame = () => {
    this.endgame()(this.round);
    this.cardsSelected = [];
    this.round = 0;
  }
}

export default GameController;
