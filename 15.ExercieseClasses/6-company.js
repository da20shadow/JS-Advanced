class Company{
    constructor() {
        this.departments = {};
    }

    addEmployee(name,salary,position,department){

        if (name.trim() === ''){
            throw new Error('Invalid input!');
        }
        if (salary < 0){
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)){
            this.departments[department] = [];
        }
        this.departments[department].push({name,salary,position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let topDepartment = null;
        let bestSalary = 0;
        for (const department in this.departments) {

            let avgSalary = 0;
            for (const el of this.departments[department]) {
                avgSalary += el.salary;
            }
            avgSalary /= this.departments[department].length;

            if (avgSalary > bestSalary){
                topDepartment = department;
                bestSalary = avgSalary;
            }
        }

        this.departments[topDepartment].sort((obj1,obj2) => {
            if (obj1.salary === obj2.salary){
                return obj1.name.localeCompare(obj2.name);
            }else{
                return obj2.salary - obj1.salary;
            }
        });
        let stringToReturn = '';
        stringToReturn += `Best Department is: ${topDepartment}\n`;
        stringToReturn += `Average salary: ${bestSalary.toFixed(2)}`;
        this.departments[topDepartment].forEach(worker => {
            stringToReturn += `\n${worker.name} ${worker.salary} ${worker.position}`;
        })
        return stringToReturn;
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());