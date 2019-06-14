'use strict'

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question_1 = prompt("Введите обязательную статью расхода в этом месяце", ''),
    question_2 = prompt("Во сколько ободется?", ''),
    question_3 = prompt("Введите обязательную статью расхода в этом месяце", ''),
    question_4 = prompt("Во сколько ободется?", '');

appData.expenses.question_1 = question_2;
appData.expenses.question_3 = question_4;

alert(appData.budget / 30);
