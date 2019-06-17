'use strict'

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
    b = prompt("Во сколько ободется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 40) {
        appData.expenses[a] = b;
    } 
};



// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
//         b = prompt("Во сколько ободется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != "" && a.length < 40) {
//         appData.expenses[a] = b;
//     }
//     i++;
// };


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
//     b = prompt("Во сколько ободется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '')  {
//         appData.expenses[a] = b;
//     }
//     i++;
// } 
// while (i <2);

appData.moneyPerDate = appData.budget / 30;

alert("Ежедневный минимум: " + appData.moneyPerDate);


if (appData.moneyPerDate < 100) {
    console.log("Низкий уровень дохода")
} else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
    console.log("Средний уровень дохода")
} else if (appData.moneyPerDate > 2000) {
    console.log("Высокий уровень дохода")
} else {
    console.log("Произошла ошибка")
};






// if (num == 49) {
//     console.log("Неверно")
// } else if (num > 100) {
//     console.log("Много")
// } else {
//     console.log("Верно")
// };

// switch (num) {
//     case num > 100:
//         console.log("Много");
//         break;
//     case num < 10:
//         console.log("Мало");
//         break;
//     case 50:
//         console.log("Верно");
//         break;
//     default:
//         console.log("blabla");
//         break;
// };


// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// } 
// while (num < 60);


// for (let i = 1; i < 10; i++) {
//     if (i == 4) {
//         continue
//     }
//     console.log(i)
// }