function getHandScore(input) {
    var cards = input.split(" ");
    var count = 1;
    var oldCardScoure = '';
    var score = 0;
    var onlyA = false;
    var arrayScore = [
        { type: 'H', score: 0.0 },
        { type: 'C', score: 0.0 },
        { type: 'D', score: 0.0 },
        { type: 'S', score: 0.0 },
    ];
    var _loop_1 = function () {
        var cardType = cards[i].substring(0, 1);
        var cardScore = cards[i].substring(1, cards[i].length);
        var index = arrayScore.findIndex(function (_a) {
            var type = _a.type;
            return type === cardType;
        });
        if (cardScore === oldCardScoure) {
            count++;
        }
        oldCardScoure = cardScore;
        var data = checkCardSoure(cardScore, onlyA);
        arrayScore[index].score += data.score;
        onlyA = data.onlyA;
    };
    for (var i = 0; i < cards.length; i++) {
        _loop_1();
    }
    if (count === cards.length) {
        if (cards[0].substring(1, cards[0].length) === 'A') {
            score = 35;
        }
        else {
            score = 32.5;
        }
    }
    else {
        score = arrayScore.reduce(function (highest, current) {
            return current.score > highest.score ? current : highest;
        }).score;
    }
    console.log(arrayScore);
    return score;
}
function checkCardSoure(cardScore, onlyA) {
    var data = {
        score: 0,
        onlyA: onlyA
    };
    if (cardScore === 'J' || cardScore === 'Q' || cardScore === 'K') {
        data.score = 10;
    }
    else if (cardScore === 'A') {
        if (onlyA == false) {
            data.score = 11;
            data.onlyA = true;
        }
        else {
            data.score = 1;
        }
    }
    else {
        data.score = +cardScore;
    }
    return data;
}
console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("H9 D10 HA"));
console.log(getHandScore("CA DA HA"));
