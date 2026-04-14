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
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const user2 = {
car: "Toyota",
home: "flat",
placeOflive: "Kyiv",
children: false,
cat: true,
countProps(obj){
return Object.keys(obj).length;
}
}
console.log(user2.countProps(user2))
//3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
function findBestEmployee(employees) {
  let TheBestEmployerName = "";
let TheBestEmployerNumber = 0
const employeesValues = Object.entries(employees);
for (const [employer, completedTasks] of employeesValues) {
if(completedTasks > TheBestEmployerNumber){
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
    
}

console.log(findBestEmployee(employees));






//4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const employeesSalaries = {
  Andriy: 34000,
  Olena: 103000,
  Nazar: 78000,
  Vlad: 0,
  Anastasia: 59000,
};
function countTotalSalary(employeesSalaries){
const values = Object.values(employeesSalaries)
 let sum = 0;
for(let value = 0; value < values.length; value++){
sum += values[value];
}
return sum
}


console.log(countTotalSalary(employeesSalaries));