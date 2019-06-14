let PlayingCardFactory = function () {
  const playingCardComplete = [
    'ace_clubs',
    'two_clubs',
    'three_clubs',
    'four_clubs',
    'five_clubs',
    'six_clubs',
    'seven_clubs',
    'eight_clubs',
    'nine_clubs',
    'ten_clubs',
    'jack_clubs',
    'queen_clubs',
    'king_clubs',
    'ace_hearts',
    'two_hearts',
    'three_hearts',
    'four_hearts',
    'five_hearts',
    'six_hearts',
    'seven_hearts',
    'eight_hearts',
    'nine_hearts',
    'ten_hearts',
    'jack_hearts',
    'queen_hearts',
    'king_hearts',
    'ace_spades',
    'two_spades',
    'three_spades',
    'four_spades',
    'five_spades',
    'six_spades',
    'seven_spades',
    'eight_spades',
    'nine_spades',
    'ten_spades',
    'jack_spades',
    'queen_spades',
    'king_spades',
    'ace_diamonds',
    'two_diamonds',
    'three_diamonds',
    'four_diamonds',
    'five_diamonds',
    'six_diamonds',
    'seven_diamonds',
    'eight_diamonds',
    'nine_diamonds',
    'ten_diamonds',
    'jack_diamonds',
    'queen_diamonds',
    'king_diamonds',
  ];

  const getTenCards = () => {
    let listCards = [];
    let index = 0;
    while (index < 10) {
      const card = getCard();

      if (!listCards.includes(card)) {
        listCards.push(card);
        index += 1;
      }
    }
    listCards = listCards.concat(listCards);
    shuffe(listCards);
    return listCards;
  };

  const getCard = () => {
    return playingCardComplete[Math.floor(Math.random() * playingCardComplete.length)];
  };

  const shuffe = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  return {getTenCards};
};

export default PlayingCardFactory;










































































































