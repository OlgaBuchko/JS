// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//


// function User(id, name, surname , email, phone, arr) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     arr.push(this)
// }
// let users= [
// ]

// new User(1, "user1", "surname1", "email1", 1111111, users );
// new User(2, "user2", "surname2", "email2", 2222222, users );
// new User(3, "user3", "surname3", "email3", 3333333, users );
// new User(4, "user4", "surname4", "email4", 4444444, users );
// new User(5, "user5", "surname5", "email5", 5555555, users );
// new User(6, "user6", "surname6", "email6", 6666666, users );
// new User(7, "user7", "surname7", "email7", 7777777, users );
// new User(8, "user8", "surname8", "email8", 8888888, users );
// new User(9, "user9", "surname9", "email9", 9999999, users );
// new User(10, "user10", "surname10", "email10", 1010101, users )

// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//


// let userFilter = users.filter((user) => user.id%2 ===0)
// console.log(userFilter)





// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

// let userSort = users.sort((user1, user2) => user1.id-user2.id)
// console.log(userSort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {

    this.id = id;
    this.name=name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
}}


// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [];
//
//     clients.push((new Client('id1', 'name1', 'surname1' , 'email1', 'phone1',[ 'order1' , 'order1' , 'order1'])))
// clients.push((new Client('id2', 'name2', 'surname2' , 'email2', 'phone2',[ 'order2' , 'order2' , 'order2','order2'])))
// clients.push((new Client('id3', 'name3', 'surname3' , 'email3', 'phone3',[ 'order3' , 'order3' , 'order3'])))
// clients.push((new Client('id4', 'name4', 'surname4' , 'email4', 'phone4',[ 'order4' , 'order4' , 'order4','order4' , 'order4' , 'order4'])))
// clients.push((new Client('id5', 'name5', 'surname5' , 'email5', 'phone5',[ 'order5' , 'order5' , 'order5','order5' , 'order5','order5' , 'order5'])))
// clients.push((new Client('id6', 'name6', 'surname6' , 'email6', 'phone6',[ 'order6' , 'order6' , 'order6','order6' , 'order6'])))
// clients.push((new Client('id7', 'name7', 'surname7' , 'email7', 'phone7',[ 'order7' , 'order7' , 'order7'])))
// clients.push((new Client('id8', 'name8', 'surname8' , 'email8', 'phone8',[ 'order8' , 'order8' , 'order8', 'order8' , 'order8'])))
// clients.push((new Client('id9', 'name9', 'surname9' , 'email9', 'phone9',[ 'order9' , 'order9' , 'order9', 'order9'])))
// clients.push((new Client('id10', 'name10', 'surname10' , 'email10', 'phone10',[ 'order10' , 'order10' , 'order10', 'order10' , 'order10', 'order10' , 'order10'])))
//
// console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

// console.log(clients.sort((client1 , client2) =>
//
//         client1.order.length-client2.order.length
//
// )
// )
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// function  Car(model, manufacturer, year ,maxSpeed, engine){
//     this.model= model;
//     this.manufacturer=manufacturer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//     this.drive=function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info=function () {
//         for (const key in this) {
//             console.log(key, this[key])
//         }
//     }
// this.increaseMaxSpeed= function (newSpeed) {
//     this.maxSpeed= this.maxSpeed+newSpeed
// }
// this.changeYear= function (nevValue) {
//     this.year= nevValue
// }
// this.addDriver= function (driver) {
//     this.driver= driver
// }
// }


//
// let car1= new Car('Volvo V90 CC ', 'volvo', 1985, 180, '5l' )
// console.log(car1)
// // car1.drive();
// // car1.info()
// car1.increaseMaxSpeed(123)
// console.log(car1)
// car1.changeYear(1234)
// console.log(car1)
//
// let driver= new Client(2, 'Vasya', 'fhjskk', 'jfjshsh', 87754)
// car1.addDriver(driver)
// console.log(car1.driver)


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

// class Car {
//     constructor(model, manufacturer, year ,maxSpeed, engine) {
//         this.model= model;
//     this.manufacturer=manufacturer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//     this.drive=function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info=function () {
//         for (const key in this) {
//             console.log(key, this[key])
//         }
//     }
// this.increaseMaxSpeed= function (newSpeed) {
//     this.maxSpeed= this.maxSpeed+newSpeed
// }
// this.changeYear= function (nevValue) {
//     this.year= nevValue
// }
// this.addDriver= function (driver) {
//     this.driver= driver
// }
//     }
// }


//
// let car1= new Car('Volvo V90 CC ', 'volvo', 1985, 180, '5l' )
// console.log(car1)
// car1.drive();
// car1.info()
// car1.increaseMaxSpeed(123)
// console.log(car1)
// car1.changeYear(1234)
// console.log(car1)
//
// let driver= new Client(2, 'Vasya', 'fhjskk', 'jfjshsh', 87754)
// car1.addDriver(driver)
// console.log(car1.driver)
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, foot, arr) {
        this.name=name;
        this.age= age;
        this.foot=foot;
    }
}
let cinderellaArr =[]
cinderellaArr.push(new Cinderella('ciderella1', 22, 32,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella2', 22, 35,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella3', 23, 36,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella4', 24, 30,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella5', 25, 39,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella6', 26, 37,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella7', 27, 38,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella8', 28, 31,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella9', 29, 40,cinderellaArr));
cinderellaArr.push(new Cinderella('ciderella10', 20, 34,cinderellaArr))


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foot, arr) {
        this.name=name;
        this.age= age;
        this.foot=foot;
    }
}

let prince = new Prince('Prince', 32, 34);

let cinderellaPrincess = cinderellaArr.find(cinderella=> cinderella.foot === prince.foot)
console.log(cinderellaPrincess)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку