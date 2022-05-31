function generateReport() {

    const output = document.querySelector('#output');
    const checkBoxes = Array.from(document.querySelectorAll('thead tr th input'));
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    console.log('CheckBoxes:')
    console.log(checkBoxes)
    console.log('===============================')

    const result = [];

    console.log('Rows:')
    tableRows.forEach(row => {

        console.log(row)
        const current = {};

        //Creating array from all td in the current row (tr)
        Array.from(row.querySelectorAll('td'))
            .forEach((td, index) => {
                //for each td check if th at the same index is checked
            if (checkBoxes[index].checked) {
                //create object property with th name and td content value
                current[checkBoxes[index].name] = td.textContent;
            }

        });
        //add the object to the array
        result.push(current);
    });
    //Convert the array with the objects to JSON string
    output.value = JSON.stringify(result);
}

let p = document.createElement('p');