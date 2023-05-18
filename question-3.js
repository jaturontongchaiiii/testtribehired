var commonWords = [
    "ROOM", "SALTS", "BLOOD", "BE", "GIRL", "SHIP"
];
function getQuestionPart(phrases) {
    var array = [];
    for (var i = 0; i < phrases.length; i++) {
        for (var j = 0; j < phrases[i].length; j++) {
            for (var k = j; k < phrases[i].length; k++) {
                var index = commonWords.findIndex(function (word) { return word === phrases[i].substring(j, k + 1); });
                if (index != -1) {
                    console.log(phrases[i].substring(j, k + 1));
                    array.push(phrases[i].substring(j, k + 1));
                }
            }
        }
    }
    return array;
}
console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));
