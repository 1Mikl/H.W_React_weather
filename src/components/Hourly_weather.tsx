import * as React from "react";

import "../styles/Widget.css";

function Hourly(props) {
    return (
        <div className="widget">
            <div className="panel">
                <div className="date">
                    {props.day === 0 && "Сейчас"}
                    {props.day === 1 && "Через час"}
                    {((props.day < 5) && (props.day > 1)) && `Через ${props.day} часа` }
                    {((props.day > 4) && (props.day < 21)) && `Через ${props.day} часов` }
                    {props.day === 21 && `Через ${props.day} час`}
                    {((props.day > 21) && (props.day < 25)) && `Через ${props.day} часа` }

                </div>
                <div className="temp">
                   <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" width="60"/>
                   {Math.round(props.temp)}&deg;
                </div>
            </div>
        </div>
    );
};

export default Hourly;

