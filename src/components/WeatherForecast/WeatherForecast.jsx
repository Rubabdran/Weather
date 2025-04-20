import './WeatherForecast.css';
import { useState } from 'react';


const WeatherForecast = ({weather}) => {
    const conditionClass = `weather ${weather.conditions.toLowerCase()}`;
    const [showInfo, setShowInfo] = useState(false);

    return(
    <div className={conditionClass}>
    <h2> {weather.day} </h2>
    <img src= {weather.img} alt= {weather.imgAlt} />
    <div>
    <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'hide ': 'show'}
        </button>
    {showInfo && (
        <div>
    <p><span> {weather.conditions} </span> current weather conditions</p>
    <p><span> {weather.time} </span> time of day</p> 
    </div>)}
    </div> </div> );
};

export default WeatherForecast;
