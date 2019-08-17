let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(object) {
  if(Array.isArray(object)) {
    return object.reduce((prev, curr) => prev + curr.salary, 0);
  } else {
    sum = 0;
    for(let dep of Object.values(object)) {
      sum += sumSalaries(dep);
    }
    return sum;
  }
}

console.log(sumSalaries(company))
