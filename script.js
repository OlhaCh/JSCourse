let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstPurch = prompt("Введите обязательную статью"
    + " расходов в этом месяце", ""),
    firstExp = prompt("Во сколько обойдется?", ""),
    secondPurch = prompt("Введите обязательную статью"
    + " расходов в этом месяце", ""),
    secondExp = prompt("Во сколько обойдется?", "");

    appData.expenses.firstPurch=firstExp;
    appData.expenses.secondPurch=secondExp;

    alert("Ваши расходы на 1 день составляют: "+appData.budget/30+" $");

