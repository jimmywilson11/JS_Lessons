let money = +prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null &&  (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b
    } else {

    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Day budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Several");
} else if (appData.moneyPerDay > 2000) {
    console.log("Big money");
} else {
    console.log("Error");
}