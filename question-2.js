function getClockAngle(hh_mm) {
    // return the shorter angle between the hour and minute hands of the clock, in degree
    var data = hh_mm.split(":");
    var hourDegree = 0;
    var minDegree = (data[1] / 5) * 30;
    var degreeCompareOne = 0;
    var degreeCompareTwo = 0;
    if (+data[0] > 12) {
        hourDegree = +data[0] - 12;
    }
    else {
        hourDegree = +data[0];
    }
    hourDegree *= 30;
    hourDegree += minDegree / 12;
    if (minDegree == 0) {
        minDegree = 360;
    }
    else {
        minDegree += 360;
    }
    degreeCompareOne = Math.abs(minDegree - hourDegree);
    degreeCompareTwo = Math.abs((hourDegree - minDegree) + 360);
    if (degreeCompareOne > 360)
        degreeCompareOne -= 360;
    return degreeCompareOne < degreeCompareTwo ? degreeCompareOne : degreeCompareTwo;
    ;
}
console.log(getClockAngle("09:30"));
console.log(getClockAngle("09:31"));
console.log(getClockAngle("17:30"));
