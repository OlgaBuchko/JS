// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//

//



let user1 ={
    name:'name',
    age :12,
    greeting : function (name) {
        console.log(`hello my name is ${name}`)
    },
    blabla: function () {
        console.log('bla bla bla')
    }
}


function copiFunc(obj) {
    if (obj){
        let  funcArr = []

    for (const key in obj) {
        if (typeof (obj[key]) === 'function'){

            let func = obj[key].bind({})
         funcArr.push({func,key});
            console.log(funcArr)
            }}
            let parseObj = JSON.parse(JSON.stringify(obj))
            for (const funcinArr of funcArr) {
                parseObj[funcinArr.key]=funcinArr.func;

            }

            return parseObj



}
throw new Error('error')

}

let userClone = copiFunc(user1)
console.log(userClone)


//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newArrCourses = [];
coursesAndDurationArray.map((value, index) => {
    newArrCourses.push({id:index+1,title:value.title,monthDuration:value.monthDuration})
})
console.log(newArrCourses)
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції