function getHandScore(input: string): number {
    const cards = input.split(" ");
    let count: number = 1;
    let oldCardScoure: string = '';
    let score: number = 0;
    let onlyA: boolean = false;

    let arrayScore = [
        { type: 'H', score: 0.0 },
        { type: 'C', score: 0.0 },
        { type: 'D', score: 0.0 },
        { type: 'S', score: 0.0 },
    ];

    for (var i = 0; i < cards.length; i++) {
        const cardType = cards[i].substring(0, 1);
        const cardScore = cards[i].substring(1, cards[i].length);
        const index = arrayScore.findIndex(({ type }) => type === cardType);
        if (cardScore === oldCardScoure) {
            count++;
        }
        oldCardScoure = cardScore;
        let data = checkCardSoure(cardScore, onlyA);
        arrayScore[index].score += data.score;
        onlyA = data.onlyA;
    }

    if (count === cards.length) {
        if (cards[0].substring(1, cards[0].length) === 'A') {
            score = 35;
        } else {
            score = 32.5;
        }
    } else {
        score = arrayScore.reduce((highest, current) => {
            return current.score > highest.score ? current : highest;
        }).score;
    }

    console.log(arrayScore);

    return score;
}

function checkCardSoure(cardScore: string, onlyA: boolean): any {
    let data = {
        score: 0,
        onlyA: onlyA
    };

    if (cardScore === 'J' || cardScore === 'Q' || cardScore === 'K') {
        data.score = 10;
    } else if (cardScore === 'A') {
        if (onlyA == false) {
            data.score = 11;
            data.onlyA = true;
        } else {
            data.score = 1;
        }
    } else {
        data.score = +cardScore;
    }

    return data;
}

console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("H9 D10 HA"));
console.log(getHandScore("CA DA HA"));
