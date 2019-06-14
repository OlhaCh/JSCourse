// Получить кнопку "Начать расчет" через id
let btnStart=document.querySelector('#start');

// Получить все блоки в правой части программы 
// через классы (которые имеют класс название-value, 
// начиная с <div class="budget-value"></div> и заканчивая
// <div class="yearsavings-value"></div>)
let budgetValue=document.querySelector('.budget-value'),
    dayBudgetValue=document.querySelector('.daybudget-value'),
    levelValue=document.querySelector('.level-value'),
    expensesValue=document.querySelector('.expenses-value'),
    optionalExpensesValue=document.querySelector('.optionalexpenses-value'),
    incomeValue=document.querySelector('.income-value'),
    monthSavingsValue=document.querySelector('.monthsavings-value'),
    yearSavingsValue=document.querySelector('.yearsavings-value'),

// Получить поля(input) c обязательными расходами через
//  класс. (class=”expenses-item”)
    expensesItems=document.querySelectorAll(".expenses-item"),

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
// каждую в своей переменной. 
    expensesBtn=document.getElementsByTagName('button')[0],
    optionalExpensesBtn=document.getElementsByTagName('button')[1],
    countBtn=document.getElementsByTagName('button')[2],

// Получить поля для ввода необязательных расходов 
// (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItems=document.querySelectorAll('.optionalexpenses-item'),
// Получить оставшиеся поля через querySelector 
// (статьи возможного дохода, чекбокс, сумма, процент,
//      год, месяц, день)
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


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

