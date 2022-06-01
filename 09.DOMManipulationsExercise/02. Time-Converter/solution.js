function attachEventsListeners() {

    // 1 day = 24 hours = 1440 min = 86400 sec

    let inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    let currentInput = {};
    inputs.forEach(input => {
        input.addEventListener('change', (e)=>{
            inputs.forEach(input => input.id !== e.target.id
                ? input.value = ''
                : console.log('Changed input: ', e.target.id))
            currentInput[e.target.id] = e.target.value;
        })
    })

    let buttons = Array.from((document.querySelectorAll('input[type="button"]')));

    buttons.forEach(b => {
        b.addEventListener('click', (e) => {
            let skip = inputToSkip(e.target.id);
            let convertValue = inputs.find(i => i.value.trim() !== '' && i.id !== skip);
            let convertFromId = convertValue.id; //hours
            let convertTo = e.target.id; //daysBtn
            converter(convertFromId,convertValue,convertTo);
        });
    })


    function converter(convertFromId,convertValue,convertTo){
        let result = '';

        switch (convertTo){
            case 'daysBtn':
                if (convertFromId === 'hours'){
                    result = Number(convertValue.value) / 24;
                }else if (convertFromId === 'minutes'){
                    result = Number(convertValue.value) / 1440;
                }else if (convertFromId === 'seconds'){
                    result = Number(convertValue.value) / 86400;
                }

                document.getElementById('days').value = result;
                break;
            case 'hoursBtn':
                if (convertFromId === 'days'){
                    result = Number(convertValue.value) * 24;
                }else if (convertFromId === 'minutes'){
                    result = Number(convertValue.value) / 60;
                }else if (convertFromId === 'seconds'){
                    result = Number(convertValue.value) / 3600;
                }
                document.getElementById('hours').value = result;
                break;
            case 'minutesBtn':
                if (convertFromId === 'days'){
                    result = Number(convertValue.value) * 1440;
                }else if (convertFromId === 'hours'){
                    result = Number(convertValue.value) * 60;
                }else if (convertFromId === 'seconds'){
                    result = Number(convertValue.value) / 60;
                }
                document.getElementById('minutes').value = result;
                break;
            case 'secondsBtn':
                if (convertFromId === 'days'){
                    result = Number(convertValue.value) * 86400;
                }else if (convertFromId === 'hours'){
                    result = Number(convertValue.value) * 3600;
                }else if (convertFromId === 'minutes'){
                    result = Number(convertValue.value) * 60;
                }
                document.getElementById('seconds').value = result;
                break;
        }

    }

    function inputToSkip(idBtn){
        switch (idBtn){
            case 'daysBtn':
                return 'days';
            case 'hoursBtn':
                return 'hours';
            case 'minutesBtn':
                return 'minutes';
            case 'secondsBtn':
                return 'seconds';
        }
    }

}

//Solution that juge wants because think that
//I can't separate them and make it easy for me because is idiot
// function attachEventsListeners() {
//     const rations = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400,
//     };
//
//     function convert(value, unit) {
//         const inDays = value / rations[unit];
//
//         return {
//             days: inDays,
//             hours: inDays * rations.hours,
//             minutes: inDays * rations.minutes,
//             seconds: inDays * rations.seconds,
//         };
//     }
//
//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');
//
//     document.querySelector('main').addEventListener('click', onConvert);
//
//     function onConvert(e) {
//         const input = e.target.parentElement.querySelector('input[type="text"]');
//
//         const time = convert(input.value, input.id);
//         daysInput.value = time.days;
//         hoursInput.value = time.hours;
//         minutesInput.value = time.minutes;
//         secondsInput.value = time.seconds;
//     }
// }