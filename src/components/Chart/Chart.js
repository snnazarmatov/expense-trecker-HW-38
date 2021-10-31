import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    //dataPointValues га map аркылуу толко value ларды сактап коюп жатабыз
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);//каждый dataPoint мы получаем dataPoint.value 
    
    //max()методу эн жогорку числону алат
    const totalMax = Math.max(...dataPointValues)
    //dataPointValues деп массивтин озун жазып койсок иштебей калат ошондуктан spread operator колдонуп чачып салсак а max() методу озу кайсы value эн коп санда экенин тандап алат.
    
    return (
        <div className="chart">
            {
            //каждый dataPoint ту ChartBar га рендер кылышыбыз керек  
                props.dataPoints.map(dataPoint => {
                    return <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMax}
                            label={dataPoint.label}
                    />
                })
            }
        </div>
    )
}

export default Chart;