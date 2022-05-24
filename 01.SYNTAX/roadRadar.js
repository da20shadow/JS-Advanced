//Task 6 - Road Radar
function roadRadar(speed,area){

    switch (area){
        case 'motorway':
            //130km
            calculateSpeed(speed,130);
            break;
        case 'interstate':
            calculateSpeed(speed,90);
            break;
        case 'city':
            calculateSpeed(speed,50);
            break;
        case 'residential':
            calculateSpeed(speed,20);
            break;
    }

    function calculateSpeed(currentSpeed,allowedSpeed){

        if (currentSpeed <= allowedSpeed){
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
        }else {
            let difference = currentSpeed - allowedSpeed;
            let status = difference <= 20
                ? 'speeding'
                : difference > 20 && difference <= 40
                    ? 'excessive speeding'
                    : 'reckless driving';
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);

        }
    }
}
roadRadar(40,'city');
roadRadar(21,'residential');
roadRadar(120,'interstate');
roadRadar(200,'motorway');
