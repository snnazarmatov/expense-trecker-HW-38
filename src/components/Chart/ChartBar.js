import React from "react";
import './ChartBar.css';

const ChartBar = props => {
    //пишем логику чтобы css мн взаимодействе болуш учун.'0%'css беребиз
    let barFillHeight = '0%'
  //условия  
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';//% ти таба турган метод
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" //"chart-bar__fill"биздин value буздун маанисин алышы керек анан value нун маанисин % ке которушубуз керек. % ти кантип табабыз?
                style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">
            {/* будет содержат месяцев  */}
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar;