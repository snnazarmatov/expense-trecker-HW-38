import React from "react"
import Chart from "../Chart/Chart"

const ExpensesChart = props => {
    const chartDataPoints = [
        {label:"Jan", value: 0},
        {label:"Feb", value: 0},
        {label:"Mar", value: 0},
        {label:"Apr", value: 0},
        {label:"May", value: 0},
        {label:"Jun", value: 0},
        {label:"Jul", value: 0},
        {label:"Aug", value: 0},
        {label:"Sep", value: 0},
        {label:"Oct", value: 0},
        {label:"Nov", value: 0},
        {label:"Dec", value: 0},
        //кайсы айда канча расход кеткен болсо сразу value да сакталат
    ]
//каждый expense итарация болот
    for (const expense of props.items) {
        const expenseMonth = expense.date.getMonth() // January => 0 метод getMonth() возвращает месяц указанной даты по местному времени нумерация месяцев начинается с нуля для первого месяца в году.
        chartDataPoints[expenseMonth].value += expense.amount;
        //chartDataPoints кайрылып туруп массив аркылуу[expenseMonth бул айларды сактайт] берсек (chartDataPoints[expenseMonth]бул chartDataPoints[0]дегени тоист январь анан биз ошол айдын value сун алабыз ) += expense.amount;бул деген ар биринин стоимостун алып туруп value топтоп коюуп жатабыз. демек биз диагрммабыздын основной логикасын туздук. эми дайыма диагрмма чыгып туруш учун chart ка кайтабыз.  
        console.log(expenseMonth.value);
    }
//{chartDataPoints}ту dataPoints деп Chart ка берип жатабыз
    return <Chart dataPoints={chartDataPoints} />

}

export default ExpensesChart;