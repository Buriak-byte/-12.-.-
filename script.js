//1
let user = {
  hobby: "football",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
//2

const user2 = {
  car: "Toyota",
  home: "flat",
  placeOflive: "Kyiv",
  children: false,
  cat: true,
  countProps(obj) {
    return Object.keys(obj).length;
  },
};
console.log(user2.countProps(user2));
//3

function findBestEmployee(employees) {
  let TheBestEmployerName = "";
  let TheBestEmployerNumber = 0;
  const employeesValues = Object.entries(employees);
  for (const [employer, completedTasks] of employeesValues) {
    if (completedTasks > TheBestEmployerNumber) {
      TheBestEmployerNumber = completedTasks;
      TheBestEmployerName = employer;
    }
  }
  return `${TheBestEmployerName}: ${TheBestEmployerNumber}`;
}

const employees = {
  Andriy: 45,
  Olena: 128,
  Nazar: 150,
  Vlad: 0,
  Anastasia: 95,
};

console.log(findBestEmployee(employees));

//4
const employeesSalaries = {
  Andriy: 34000,
  Olena: 103000,
  Nazar: 78000,
  Vlad: 0,
  Anastasia: 59000,
};
function countTotalSalary(employeesSalaries) {
  const values = Object.values(employeesSalaries);
  const entries = Object.entries(employeesSalaries);
  let sum = 0;
  for (let value = 0; value < values.length; value++) {
    sum += values[value];
  }
  for (const [employer2, Salary] of entries) {
    console.log(`${employer2}: ${Salary}`);
  }
  return sum;
}

console.log(countTotalSalary(employeesSalaries));
//5
const arr = [
  { prop: "tomato", exp: 10 },
  { prop: "auto", exp: 2000 },
  { prop: "lopast", exp: 50 },
  { prop: "eight", exp: 8 },
  { prop: "CSGO", exp: 0 },
];

function getAllPropValues(arr, prop) {
  const result = [];
  for (let i1 = 0; i1 < arr.length; i1++) {
    result.push(arr[i1][prop]);
  }
  return result;
}

console.log(getAllPropValues(arr, "prop"))
console.log(getAllPropValues(arr, "exp"))
//6
const allProducuts = [
  { name: "milk", count: 3, price: 60 },
]
const productName = allProducuts[0].name;
console.log(productName)
function calculateTotalPrice(allProducuts, productName){
  const productPrice = allProducuts[0].price
  const productsCount = allProducuts[0].count
  return productPrice * productsCount
}
console.log(calculateTotalPrice(allProducuts, productName));