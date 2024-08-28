// - Знайти та вивести довижину настипних стрінгових значень

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';

// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// let strArr=(text,newArr)=>{
//      newArr.push(text.split(' '))
// }
//
// let stringToarray=[];
// strArr(str,stringToarray );
// console.log(stringToarray)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let numsArr= [10,8,-7,55,987,-1011,0,1050,0];
// let stringNumArr =numsArr.map(value =>String(value))
//
// console.log(stringNumArr)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let sortNums=nums.sort((a,b) => a-b)
//
// console.log(sortNums)
// let sortNums2=nums.sort((a,b) => b-a)
//
// console.log(sortNums2)
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sortArr = coursesAndDurationArray.sort((cours1, cours2)=>
//     cours2.monthDuration-cours1.monthDuration
// )

// console.log(sortArr)
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArr = coursesAndDurationArray.filter((cours)=> cours.monthDuration>5)
// console.log(filterArr)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let newCourserArr= coursesAndDurationArray.map((cours, index)=>  {
//    return {
//        id: index + 1, title: cours.title, monthDuration: cours.monthDuration
//    }})
//
// console.log(newCourserArr)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)


let  cardValue =[ '6','7', '8', '9','10', 'ace','jack','queen','king','joker']


 function cardGenerateArr(valuesCard){
    let valuesCardArr= valuesCard
     let cardsArr =[]
       function  cardGenerate(valuesArr, suit, finalArrCards) {

           valuesArr.map((value)=> {
               let card ={};
               card.value=value;
               card.cardSuit=suit;
               if (suit === 'spade' || suit === 'clubs' ){
                   card.color= 'black'
               }else {
                   card.color= 'red'
               }
               finalArrCards.push(card)
     })
return cardsArr
       }
     let cards = [cardGenerate(valuesCardArr,'spade',cardsArr),
         cardGenerate(valuesCardArr,'diamond',cardsArr),
         cardGenerate(valuesCardArr,'heart',cardsArr),
         cardGenerate(valuesCardArr,'clubs',cardsArr)]
 return cardsArr
}

let cardsArr = cardGenerateArr(cardValue)
console.log(cardsArr)

// - знайти піковий туз

// let joker = cardsArr.map(value => {if (value.value==='joker' && value.cardSuit === 'spade')
// {
//     console.log(value)
// }
// })

// - всі шістки
//   let six = cardsArr.map(value => {if (value.value==='6')
//   {
//       console.log(value)
//   }
//   })
// - всі червоні карти

// let redCard = cardsArr.map(value => {if (value.color==='red')
// {
//     console.log(value)
// }
// })

// - всі буби

// let diamond = cardsArr.map(value => {if (value.cardSuit==='diamond')
// {
//     console.log(value)
// }
// })


// - всі трефи від 9 та більше
//

// let joker = cardsArr.map(value => {if (value.value !== '8' && value.cardSuit === 'clubs')
// {
//     if (  value.value !== '7' && value.cardSuit === 'clubs'){
//
// if(value.value !== '6' && value.cardSuit === 'clubs'){
//     console.log(value)
// }
// }}
// })

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//
// let sortCards= cardsArr.reduce((previousValue, card) => {
//     if (card.cardSuit === 'spade') {
//     previousValue.spades.push(card)}
//     else if (card.cardSuit === 'heart'){ previousValue.hearts.push(card)}
// else if (card.cardSuit === 'clubs'){ previousValue.clubs.push(card)}
// else { previousValue.diamonds.push(card)}
// return previousValue
//
// },
//     {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: []
//     })
//
//
// console.log(sortCards)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

coursesArray.map(cours =>{
    if (cours.modules.includes('sass'))
        console.log(cours)

})


// --написати пошук всіх об'єктів, в який в modules є docker
coursesArray.map(cours =>{
    if (cours.modules.includes('docker'))
        console.log(cours)

})
