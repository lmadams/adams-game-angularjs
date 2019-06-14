let PlayerFactory = function () {
  const PLAYER_RANK = 'PLAYER_RANK';

  const getRank = () => {
    const rank = localStorage.getItem(PLAYER_RANK);
    if (rank == null) {
      return [];
    }
    return JSON.parse(rank);
  };

  const saveScore = (playerName, score) => {
    const rank = getRank();
    rank.push({
      playerName,
      score
    });
    localStorage.setItem(PLAYER_RANK, JSON.stringify(rank));
  };

  return {getRank, saveScore};
};

export default PlayerFactory;
