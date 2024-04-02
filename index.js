// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(int) {
    return function (fare){
        return fare * int;
    
    }
}
const fareDoubler = function fareDoubler(fare){
    return fare * 2;
}
const fareTripler = function fareTriple(fare){
    return fare * 3;
}
function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}