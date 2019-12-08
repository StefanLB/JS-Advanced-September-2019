class Vacation {
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = [];
    }

    registerChild(name, grade, budget){
        if(Number(budget) < this.budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if(this.kids[grade] !== undefined && this.kids[grade].filter(x=>x.name === name).length !== 0){
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        if(this.kids[grade] === undefined){
            this.kids[grade] = [];
        }

        this.kids[grade].push({
            name: name,
            budget: budget
        });

        let result = [];
        this.kids[grade].forEach(k => {
            result.push(`${k.name}-${k.budget}`)
        });

        return result;
    }

    removeChild(name, grade){
        if(this.kids[grade] === undefined || this.kids[grade].filter(x=>x.name === name).length === 0){
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        this.kids[grade] = this.kids[grade].filter(x=>x.name !== name);

        let result = [];
        this.kids[grade].forEach(k => {
            result.push(`${k.name}-${k.budget}`)
        });

        return result;
    }

    toString(){
        if(this.kids.length === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let kidsGrades = Object.keys(this.kids);
        kidsGrades.sort((a,b) => Number(a) - Number(b));

        let result = '';

        for(let grade of kidsGrades){
            result += `Grade: ${grade}\n`;

            let i = 1;

            this.kids[grade].forEach(k => {
                result += `${i++}. ${k.name}-${k.budget}\n`;
            });

            result += '\n';
        }

        result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n` + result;
        return result.trim();
    }

    get numberOfChildren(){
        return this.kids.reduce((prev,curr) => {
           prev += curr.length;
           return prev;
        },0);
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));


let vacation2 = new Vacation('Mr Pesho', 'San diego', 2000);
vacation2.registerChild('Gosho', 5, 2000);
vacation2.registerChild('Lilly', 6, 2100);

console.log(vacation2.removeChild('Gosho', 9));

vacation2.registerChild('Pesho', 6, 2400);
vacation2.registerChild('Gosho', 5, 2000);

console.log(vacation2.removeChild('Lilly', 6));
console.log(vacation2.registerChild('Tanya', 5, 6000))


let vacation3 = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation3.registerChild('Gosho', 5, 3000);
vacation3.registerChild('Lilly', 6, 1500);
vacation3.registerChild('Pesho', 7, 4000);
vacation3.registerChild('Tanya', 5, 5000);
vacation3.registerChild('Mitko', 10, 5500)
console.log(vacation3.toString());
