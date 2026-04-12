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
const employees = {
    Andriy: 45,
    Olena: 128,
    Nazar: 150,
    Vlad: 0,
    Anastasia: 95,
    findBestEmployee(employees){
        for (const employer of employees) {
          console.log(employer)
        }
    }
}
console.log(employees.findBestEmployee(employees));