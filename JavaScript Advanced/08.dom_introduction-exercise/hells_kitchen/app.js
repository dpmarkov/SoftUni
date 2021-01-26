function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputData = document.querySelector('#inputs textarea').value;
      let restaurants = {};
      
   //parsing input.............................................................
      let pattern = /"([^"]+)"/g;
      let match = pattern.exec(inputData);
      let tempArr = [];

      while (match != null){
         tempArr.push(match[1]);
         match = pattern.exec(inputData);
      }
        
      for (let elm of tempArr){
         let [name, workers] = elm.split(' - ');

         workers = workers.split(', ');

         let workersParsed = {};

         for (let tokens of workers){
            let [worker, salary] = tokens.split(' ');
            salary = Number(salary);

            workersParsed[worker] = salary;
         };

         if (restaurants.hasOwnProperty(name)){ //receiving the same restaurant again
            Object.assign(restaurants[name]['workers'], workersParsed);
         } else {
            restaurants[name] = {
               'workers': workersParsed
            };
         }
      }
   //.............................................................parsing input

      let bestRestaurantName = '';
      let bestRestaurantAvgSalary = 0;
      let bestRestaurantHighSalary = 0;

      for (let restaurant in restaurants){
         let workers = restaurants[restaurant]['workers'];
         let averageSalary = 0;
         let bestSalary = 0;

         for (let value of Object.values(workers)){
            averageSalary += value;

            if (value > bestSalary){
               bestSalary = value;
            }
         }

         averageSalary = Number((averageSalary / Object.entries(workers).length));

         if (averageSalary > bestRestaurantAvgSalary){
            bestRestaurantName = restaurant;
            bestRestaurantAvgSalary = averageSalary;
            bestRestaurantHighSalary = bestSalary;
         }
      }

      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      bestRestaurantOutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAvgSalary.toFixed(2)} Best Salary: ${bestRestaurantHighSalary.toFixed(2)}`;
   
      let bestWorkers = Object.entries(restaurants[bestRestaurantName]['workers']);

      bestWorkers.sort((a, b) => b[1] - a[1]); //sorting by salary

      let bestWorkersResult = [];

      for (let worker of bestWorkers){
         bestWorkersResult.push(`Name: ${worker[0]} With Salary: ${restaurants[bestRestaurantName]['workers'][worker[0]]}`);
      }

      document.querySelector('#workers p').textContent = bestWorkersResult.join(' ');
   }
}