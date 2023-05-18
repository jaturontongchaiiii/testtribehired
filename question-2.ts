function getClockAngle(hh_mm: string): number {
    // return the shorter angle between the hour and minute hands of the clock, in degree
    let data: any = hh_mm.split(":");
    let hourDegree: number = 0;
    let minDegree: number = (data[1] / 5) * 30;
    let degreeCompareOne: number = 0;
    let degreeCompareTwo: number = 0;
    
    if (+data[0] > 12) {
        hourDegree = +data[0] - 12;
    } else {
        hourDegree = +data[0];
    }

    hourDegree *= 30;
    hourDegree += minDegree / 12;

    if (minDegree == 0) {
        minDegree = 360;
    } else {
        minDegree += 360;
    }

    degreeCompareOne = Math.abs(minDegree - hourDegree);
    degreeCompareTwo = Math.abs((hourDegree - minDegree) + 360);
    if (degreeCompareOne > 360) degreeCompareOne -= 360;

    return degreeCompareOne < degreeCompareTwo ? degreeCompareOne : degreeCompareTwo;;
}

console.log(getClockAngle("09:30"));
console.log(getClockAngle("09:31"));
console.log(getClockAngle("17:30"));
