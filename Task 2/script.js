let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// let k=0;
// let j=0;
// while(j<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === 'string' && (typeof (a) != null)
//         && (typeof (b) != null) && a != ''
//         && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//     } else{

//     }
//     j++;
// }
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");

// if ((typeof (a)) === 'string' && (typeof (a) != null)
//     && (typeof (b) != null) && a != ''
//     && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
// } else{
// k++;
// }
// } while(k<2);



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === 'string' && ((typeof (a)) != null) && 
    ((typeof (b)) != null) && a != '' && 
    b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    } else{

    }

}
appData.moneyPerDay=appData.budget / 30;
alert("Ежедневный бюджет: "+appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("Law ballance");
} else if(appData.moneyPerDay>100&&appData.moneyPerDay<2000){
    console.log("Middle ballance");
} else if(appData.moneyPerDay>2000){
    console.log("High ballance");
} else{
    console.log("Error");
}
