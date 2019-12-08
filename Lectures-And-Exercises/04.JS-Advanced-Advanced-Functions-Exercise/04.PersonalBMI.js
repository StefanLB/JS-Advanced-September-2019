function solve(name,age,weight,height){
    function BMICalc(){
        return Math.round(weight/(Math.pow(height,2)/(Math.pow(100,2))));
    }

    function statusChecker(BMI){
        let result;

        if(BMI < 18.5){ result = 'underweight'
        } else if (BMI < 25){ result = 'normal'
        } else if (BMI < 30){ result = 'overweight'
        } else { result = 'obese'
        }

        return result;
    }

    let result = {
        name : name,
        personalInfo : {
            age : age,
            weight : weight,
            height : height
        },
        BMI : BMICalc(),
        status : statusChecker(BMICalc())
    };

    if(result.status === 'obese'){
        result.recommendation = 'admission required';
    }

    return result;
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));
