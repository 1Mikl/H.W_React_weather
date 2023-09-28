import * as React from "react";

import "../styles/Widget.css";

function Week(props) {
    return (
        <div className="widget_week">
            <div className="panel">
                <div className="date">
                    {props.day === 0 && "Сегодня"}
                    {props.day === 1 && "Завтра"}
                    {((props.day < 5) && (props.day > 1)) && `Через ${props.day} дня` }
                   {(props.day === 5) && `Через ${props.day} дней` }
                </div>
                <div className="temp">
                   <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" width="60"/>
                   {Math.round(props.temp)}&deg;
                </div>
            </div>
        </div>
    );
};

export default Week;

