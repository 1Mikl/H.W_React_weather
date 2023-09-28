import * as React from "react";

import "../styles/Widget.css";


function Current(props) {
    const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const date = new Date();

    return (
        <div className="current">
            <div className="weather-left">
                <div className="weather-city">{props.city}</div>
                <h2 className="date"> {date.toLocaleDateString()}, {days[date.getDay()]} </h2>
                <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" width="100" />
                <div className="feels-like">по ощущениям - как {Math.round(props.temp)}&deg;</div>
            </div>

            <div className="weather-right">
                <div className="temp-main">{Math.round(props.temp)}&deg;</div>
                <div className="wind">Ветер: {props.wind_speed}m/s</div>
            </div>
        </div>
    );
};

export default Current;

