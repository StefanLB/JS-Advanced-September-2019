function solve(data, criteria){
    function filterByProp(prop,value,element) {
        return element[prop] === value;
    }

    function splitParams(criteria) {
        return criteria.split('-');
    }

    function formatEmployee(el,i) {
        return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;
    }

    return criteria === 'all'
    ? JSON.parse(data)
        .map(formatEmployee)
        .join('\n')
    : JSON.parse(data)
        .filter(filterByProp.bind(undefined, ...splitParams(criteria)))
        .map(formatEmployee)
        .join('\n');
}

console.log(solve(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));

console.log(solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'));


function solve2(data, criteria){
    function employeeFormat(el, i){
        return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;
    }

    function criteriaParser(crit) {
        return crit.split('-');
    }

    function filterByCriteria(prop,value,element){
        return element[prop] === value;
    }

    return criteria === 'all'
    ? JSON.parse(data)
            .map(employeeFormat)
            .join('\n')
    : JSON.parse(data)
            .filter(filterByCriteria.bind(undefined,...criteriaParser(criteria)))
            .map(employeeFormat)
            .join('\n');
}


console.log(solve2(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));

console.log(solve2(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'));
