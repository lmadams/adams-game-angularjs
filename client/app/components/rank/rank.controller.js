class RankController {
  constructor(playerFactory) {
    "ngInject";
    const rank = playerFactory.getRank();
    // desc order
    this.rank = rank.sort((a, b) => a.score > b.score ? 1 : b.score > a.score ? -1 : 0);
  }
}

export default RankController;
