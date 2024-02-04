//Примитивы vs объекты. Копирование объектов и ссылки. Методы объекта, "this"
// let origin = 'origin'
// let copy = origin

// copy = 'copy'

// console.log(origin);
// console.log(copy);

// let itSchool = {
//   name: "intens", // адрес Дахадаева 88
// };

// let copyItSchool = itSchool; // здесь у нас хранится адрес на объект, а не сам объект

// обе переменные теперь ссылаются на один и тот же объект

// copyItSchool.name = "SkillBox";

// console.log(copyItSchool);
// console.log(itSchool);

// сравним переменные. Они равны так как ссылаются на один и тот же объект
// console.log(copyItSchool == itSchool);

// let a = {};
// let b = {};

//сравним переменные. Здесь они не равны так как ссылаются на 2 независимых объекта
// console.log(a == b);

//Создаем независимую копию объекта с отдельным адресом объекта
// let student = {
//   name: "John",
//   age: 12,
// };

// let cloneStudent = {};

//первый способ копирвоания объекта
// for (let key in student) {
//   cloneStudent[key] = student[key];
// }

// cloneStudent.name = "Magomed";

// console.log(student);
// console.log(cloneStudent);

//второй способ
// let student = {name: "Magomed"}

// let age = {age: 20}

// let attend = {attend: true}

// Object.assign(student, age, attend)

// console.log(student);

//перезаписываем скопированное имя свойства которое уже существует

// let student = {name: "Magomed"}

// Object.assign(student, {name: "Arsen"})

// console.log(student);

//Object.assign вместо цикла for

// let student = {
//   name: "John",
//   age: 12,
// };

// let clone = Object.assign({}, student)

//Объекты, объявленные как константа, могут быть изменены

// const a = {
//     number: 5
// }
// a.number = 6
// console.log(a);

//Методы объекта, "this"

// let user = {
//     name: "Magomed",
//     age: 20,
// }

// user.greeting = function () {
//     return "Hello"
// }

//Сокращенная запись метода объекта

// user = {
//     greeting() {
//         return "Hello"
//     }
// }

// console.log(user.greeting());

//Ключевое слово this в методах

// let user = {
//     userName: "Magomed",
//     age: 20,
//     greeting() {
//         return `Hello ${this.userName}`
//     }
// }

// console.log(user.greeting());

//this не является фиксированным

// let user = { name: "Magomed" };
// let admin = { name: "Admin" };

// function greeting() {
//   return (this.name);
// }

// // используем одну и ту же функцию в двух объектах
// user.f = greeting;
// admin.f = greeting;

// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"
// console.log(user.f());
// console.log(admin.f());
