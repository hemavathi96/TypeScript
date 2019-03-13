/******************************************************************************
 *  Execution       :  1. default node          : cmd> node deckOfcardsQueue.ts
 *  purpose         : To print the cards received by 4 players using 2D array.
 *  @description    : To initialize deck of cards having suit and Rank then shuffle the cards using 
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @file           : deckOfcardsQueue.ts
 *  @overview       : To print shuffeled deck of cards.
 *  @author         : hemavathi B.V <<hemavathibv16@gmail.com>>
 *  @version        : 1.0
 *  @since          : 11 march 2019
 *****************************************************************************/
import { Queue } from "../../../JavaScript/Utility/utilDataStructure";
var read = require('readline-sync')
class deckOfcards {
    deckOfcardsQueue(): void {

        try {
            var suit = ["♣️", "🔸", "❤️", "♠️"];
            var rank = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
            /**
             * @description:To calculate length of suits and values
             */
            var cards = suit.length * rank.length;
            /**
             * to create new array of deck
             */
            var cardarr = [];
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < rank.length; j++) {
                    var temp = "";
                    cardarr.push(temp + rank[j] + suit[i])
                }
            }
            /**
            * shuffle deck.
            */
            for (let i = 0; i < cards; i++) {
                var num = Math.floor(Math.random() * cards)
                /**
                 * swapping
                 */
                temp = cardarr[i]
                cardarr[i] = cardarr[num];
                cardarr[num] = temp;
            }
            /**
             * @description:Create LinkedList object for each player.
             */
            var player1 = new Queue;
            var player2 = new Queue;
            var player3 = new Queue;
            var player4 = new Queue;
            // var player2 = new Queue;
            // var player3 = new Queue;
            // var player4 = new Queue;
            /**
             * @description:Enqueue all the cards in queue using linkedlistqueue.
             */
            for (let i = 0; i < cardarr.length; i++) {
                if (i >= 0 && i < 13)
                    player1.enqueue(cardarr[i])
                else if (i >= 13 && i < 26)
                    player2.enqueue(cardarr[i])
                else if (i >= 26 && i < 39)
                    player3.enqueue(cardarr[i])
                else
                    player4.enqueue(cardarr[i]);
            }
            /**
             * @description:Sort all the deck of cards using sorting method.
             */

            var data = player1.printList()
            var arr = data.split(" ")
            console.log(" unsorted 1 :" + "  [  " + arr + "  ]  ");
            var arr10 = arr.sort()
            console.log("player 1 :" + "  [  " + arr10 + "  ]  ");
            var data1 = player2.printList()
            var arr1 = data1.split(" ")
            console.log(" unsorted 2 :" + "  [  " + arr1 + "  ]  ");
            var arr11 = arr1.sort()
            console.log("player 2 :" + "  [  " + arr11 + "  ]  ")
            var data2 = player3.printList()
            var arr2 = data2.split(" ")
            console.log(" unsorted 3 :" + "  [  " + arr2 + "  ]  ");
            var arr12 = arr2.sort()
            console.log("player 3 :" + "  [  " + arr12 + "  ]  ")
            var data3 = player4.printList()
            var arr3 = data3.split(" ")
            console.log(" unsorted 4 :" + "  [  " + arr3 + "  ]  ");
            var arr13 = arr3.sort()
            console.log("player 4 :" + "  [  " + arr13 + "  ]  ");
        } catch (err) {
            console.log(err.message);
        }
    }
}
var deck = new deckOfcards
deck.deckOfcardsQueue()
