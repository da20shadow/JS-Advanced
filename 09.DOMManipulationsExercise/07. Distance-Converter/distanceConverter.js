function attachEventsListeners() {
    let outputDistance = document.getElementById('outputDistance');
    let convertBtn = document.getElementById('convert');

    let selectedFrom = document.getElementById('inputUnits');
    let selectedTo = document.getElementById('outputUnits');

    convertBtn.addEventListener('click',convert);

    const metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert(){
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let selectFrom = selectedFrom.options[selectedFrom.selectedIndex].value;
        let selectTo = selectedTo.options[selectedTo.selectedIndex].value;

        let valueInMeters = inputDistance * metricUnits[selectFrom];
        console.log(valueInMeters)
        outputDistance.value = valueInMeters / metricUnits[selectTo];

    }

}