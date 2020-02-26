console.log('Сколько типов данных существует в JS?', ' - 6: строки, числа, boolean, undefined, null, обЪект');
console.log('Как вывести информацию в консоль?', '- console.log');
console.log('Какая функция операторов || и &&?', '- || - или, && - и.');

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let expenses = prompt('Введите обязательную статью расходов в этом месяце');
let secondExpenses = prompt('Во сколько обойдется?');
let optionalExpenses = true;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        money: time
    },
    income: []
};

alert(appData.budget / 30);