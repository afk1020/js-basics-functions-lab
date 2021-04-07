
const HQ = 42
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 42) {
        return pickupLocation - HQ;
    }
    else {
        return HQ - pickupLocation 
    }
};
function distanceFromHqInFeet(pickupLocation){
    if (pickupLocation >= 42) {
        return (pickupLocation - HQ)*264;
    }
    else {
        return (HQ - pickupLocation)*264;
    }
};

function  distanceTravelledInFeet(start, end){
    if (end >= start){
        return  (end - start)*264;
}
else {
    return (start-end)*264
}
};

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    if (distance<400){
        return 0
    }
    else if (distance > 400 && distance<2000){
        return ((distance-400)*0.02)
    }
    else if (distance>=2000 && distance < 2500){
        return 25
    }
    else if (distance>2500){
        return "cannot travel that far"
    }
};