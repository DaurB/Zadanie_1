'use strict'

let money, 
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpensis() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расхода в этом месяце", ''),
        b = prompt("Во сколько ободется?", '');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 40) {
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    };
}
chooseExpensis();


function budgetDaily() {
    appData.moneyPerDate = (appData.budget / 30).toFixed();
    alert("Ежедневный минимум: " + appData.moneyPerDate);
}


function detectLevel() {      
    if (appData.moneyPerDate < 100) {
        console.log("Низкий уровень дохода")
    } else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
        console.log("Средний уровень дохода")
    } else if (appData.moneyPerDate > 2000) {
        console.log("Высокий уровень дохода")
    } else {
        console.log("Произошла ошибка")
    };
}
detectLevel();


function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Сумма ваших накопления?"),
            percent = +prompt("Под какой процент?");

        appData.monthInCome = save/100/12*percent;
        alert("Ваш ежемесячный доход от накоплений: " + appData.monthInCome);
    }
}
checkSaving();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
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








