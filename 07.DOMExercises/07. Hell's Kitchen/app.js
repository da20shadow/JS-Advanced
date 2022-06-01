function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let array = JSON.parse(document.querySelector('#inputs textarea').value);

      const restaurants = {};

      for (let arrayElement of array) {

         let [restaurant,workers] = arrayElement.split(' - ');
         workers = workers.split(', ');

         if (!restaurants.hasOwnProperty(restaurant)){
            restaurants[restaurant] = {};
         }

         for (const worker of workers) {
            let [workerName,salary] = worker.split(' ');
            restaurants[restaurant][workerName] = Number(salary);
         }
      }
      let bestAvgSalary = 0;
      let bestRestaurantName = '';

      let arrRestaurants = Object.entries(restaurants);

      for (const arrRestaurant of arrRestaurants) {
         let [restaurantName,workersObj] = arrRestaurant;

         let currentAvg = 0;
         for (let workerName in workersObj) {
            let salary = workersObj[workerName];
            currentAvg += salary;
         }
         currentAvg = currentAvg / Object.keys(workersObj).length;
         if (bestAvgSalary < currentAvg){
            bestAvgSalary = Number(currentAvg.toFixed(2));
            bestRestaurantName = restaurantName;
         }
      }

      let bestRestaurantWorkers = Object.entries(restaurants[bestRestaurantName]);
      bestRestaurantWorkers.sort((a,b) => b[1] - a[1]);
      let topSalary =(bestRestaurantWorkers[0][1]).toFixed(2);

      document.querySelector('#bestRestaurant p')
          .textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${topSalary}`;

      document.querySelector('#workers p')
          .textContent = `${bestRestaurantWorkers.map(w => 'Name: ' + w[0] + ' With Salary: ' + w[1]).join(' ')}`;
   }
}

//Second solution:
// function solve() {
//    const html = {
//       inputField: document.querySelector("#inputs textarea"),
//       outputBestName: document.querySelector("#bestRestaurant p"),
//       outputBestWorkers: document.querySelector("#workers p"),
//    }
//
//    const getBest = data =>
//        Object.entries(data).sort(
//            (x, y) => getAverage(y[1]) - getAverage(x[1])
//        )[0];
//
//    const getAverage = workersData =>
//        workersData.reduce((a, v) => a + v[1], 0) / workersData.length;
//
//    function deserialize(data) {
//       const getWorkers = data =>
//           data
//               .split(", ")
//               .map(x => x.split(" ").map(y => (isNaN(y) ? y : Number(y))))
//
//       return JSON.parse(data)
//           .map(x => x.split(" - "))
//           .reduce((a, v) => {
//              const [name, workers] = v;
//
//              a[name] = a[name]
//                  ? [...a[name], ...getWorkers(workers)]
//                  : getWorkers(workers);
//              return a;
//           }, {});
//    }
//
//    function displayResult(data) {
//       let [name, workers] = data;
//       workers = workers.sort((x, y) => y[1] - x[1]);
//
//       html.outputBestName.innerHTML = `Name: ${name} Average Salary: ${getAverage(
//           workers
//       ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`;
//
//       html.outputBestWorkers.innerHTML = `${workers
//           .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
//           .join(" ")}`;
//    }
//
//    document
//        .getElementById("btnSend")
//        .addEventListener("click", () =>
//            displayResult(getBest(deserialize(html.inputField.value))));
// }