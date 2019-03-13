/******************************************************************************
 *  Execution       :   1. default node          : cmd> node deckOfcards.ts
 *  purpose         : To print the cards received by 4 players using LinkedListQueue.
   @description    : To initialize deck of cards having suit and Rank then shuffle the cards using
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the
                      received by the 4 Players.
 *  @file           : deckOfcards.ts
 *  @overview       : To print shuffeled deck of cards in sorted manner.
 *  @author         : hemavathi B.V<hemavathibv16@gmail.com>
 *  @version        : 1.0
 *  @since          : 08 march 2019
 *
 ******************************************************************************/
var read = require('readline-sync');
function deckCards() {
    try {
        var suit = ["♣️", "🔸", "❤️", "♠️"];
        var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        /**
         * @description:To calculate length of suits and values
         */
        var cards = suit.length * rank.length;
        /**
         * @description:to create new array of deck
         */
        var cardarr = [];
        for (var i = 0; i < suit.length; i++) {
            for (var j = 0; j < rank.length; j++) {
                var temp = "";
                cardarr.push(temp + rank[j] + suit[i]);
            }
        }
        /**
        * shuffle deck.
        */
        for (var i = 0; i < cards; i++) {
            var num = Math.floor(Math.random() * cards);
            /**
             * swapping
             */
            temp = cardarr[i];
            cardarr[i] = cardarr[num];
            cardarr[num] = temp;
        }
        var arr = [[], [], [], []];
        var a = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 9; j++) {
                arr[i][j] = cardarr[j + a];
            }
            a = a + 9;
        }
        /**
         * @description:To print the shuffled deck of card.
         */
        for (var i = 0; i < arr.length; i++) {
            console.log(" Deck of cards : " + " [ " + arr[i] + " ] ");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
deckCards();
