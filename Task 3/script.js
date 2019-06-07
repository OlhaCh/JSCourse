let money, time;
function Start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}

Start();

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExp() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a)) === 'string' && ((typeof (a)) != null) &&
            ((typeof (b)) != null) && a != '' &&
            b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }

    }
}
chooseExp();

function detectDayBudget() {
    appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(1));
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Law ballance");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle ballance");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High ballance");
    } else {
        console.log("Error");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("% in month:" + appData.monthIncome);
    }
}
checkSavings();
function chooseOptExp() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите необязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof (a) === "string") && (typeof (a) != null) && a != "" && (typeof (b)) != null &&
            b != "" && a.length < 50) {
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseOptExp();