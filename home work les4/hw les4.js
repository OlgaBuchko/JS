// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangle(a, b){
//     let area = a*b
//     return area
// }
// let result = rectangle(3,2)
// console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circle(r){
//     return area = r*r*3.14
// }
// let result = circle(3);
// console.log(result)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinder(h,r) {
//     return area = 2*3.14*h*r
// }
// let result=cylinder(2,3)
// console.log(area)

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrey=[1, 2, 3, 4, 5, 7]
// function logArr(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// logArr(arrey)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(text){
//     document.write(`<p>${text}</p>`)
// }
//
// text('Lorem ipsum dolor sit amet.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function ul(text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// ul('Lorem ipsum dolor sit amet.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul(text, li){
//     document.write(`<ul>`)
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul('Lorem ipsum dolor sit amet.', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrey= [true,3,-32,'lorem'];
// function ol(arr){
//
//         document.write(`<ol>`)
//     for (const arrElement of arr)  {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ol>`)
//
//
// }
// ol(arrey)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id:1,name: 'vasya', age: 31},
//     {id:2,name: 'petya', age: 30},
//     {id:3,name: 'kolya', age: 29},
//     {id:4,name: 'olya', age: 28},
//     {id:5,name: 'max', age: 30},
//     {id:6,name: 'anya', age: 31},
//     {id:7,name: 'oleg', age: 28},
//     {id:8,name: 'andrey', age: 29},
//     {id:9,name: 'masha', age: 30},
//     {id:10,name: 'olya', age: 31},
//     {id:11,name: 'max', age: 31}]
// function userOl(arr){
//     for (const arrElement of arr) {
//        
//     document.write(`<div>
//     <ol>
// <li>id-${arrElement.id}</li>
// <li>name-${arrElement.name}</li>
// <li>age-${arrElement.age}</li>
// </ol>
// </div>`)
// }
// }
// userOl(users)


// - створити функцію яка повертає найменьше число з масиву

// let numb=[3,5,43,1,45]


//
// function minNumb(arr){
//   let min= arr[1];
//   for (let i = 0; i < arr.length; i++) {
//    let numb = arr[i]
//
//     if (numb<min){
//       min=numb
//     }
//
//   }return min
// }
//
// console.log(minNumb(numb))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let numbers = [1,2,3,4,5,]
//
// function sum(arr){
//     let numSum = 0
//     for (const arrElement of arr) {
//         numSum=arrElement+numSum
//     }
//     return numSum
// }
//
// console.log(sum(numbers))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap (arr,index1, index2){
// let numbI2 = arr[index1]
//     arr[index1]=arr[index2];
// arr[index2]=numbI2
//     return arr
// }
// let numbs=[11,22,33,44]
// console.log(swap(numbs, 1,3))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let currency= [{currency:'USD',value:40},{currency:'EUR',value:42}]
//
// function exchange(hrn,arrCurrency, inCurrency){
//     let result= 0
//     for (const arrElement of arrCurrency) {
//         if (arrElement.currency === inCurrency){
//             result=hrn/arrElement.value
//         }
//     }
//     return result
// }
//
// console.log(exchange(40000,currency,'USD'))