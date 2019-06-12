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
    savings: true,
    chooseExp: function () {
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
    },
    detectDayBudge: function () {
        appData.moneyPerDay = parseFloat((appData.budget / 30).toFixed(1));
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Law ballance");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Middle ballance");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High ballance");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("% in month:" + appData.monthIncome);
        }
    },
    chooseOptExp: function () {
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
    },
    chooseIncome: function () {
        
        let items = prompt("Что принесет дополнительный доход? (перечислить" +
            "через запятую)", "");
        if (typeof (items) != "string" || typeof (items) == null || items == '') {
            console.log("incorrect data");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Что то ещё?", ""));
            appData.income.sort();
        }

        appData.income.forEach(function (item, i) {
            alert("Способы доп. заработка: "+(i+1)+" "+item);
        });
        

    }
};
for(let key in appData){
    console.log(key+"--"+appData[key]);
}


// chooseExp();
// detectDayBudget();
// detectLevel();
// checkSavings();
// chooseOptExp();
// chooseIncome();
