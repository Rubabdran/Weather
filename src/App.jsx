import { useState } from 'react';
import { Routes, Route, Link } from 'react-router';
import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  const [activities, setActivities] = useState([]);

  function addActivity(activity) {
    setActivities(prev => [...prev, activity]);
  }

  function removeActivity(index) {
    setActivities(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="split-text-container">
        <span className="text-part left">Local </span>
        <span className="text-part right"> Weather</span>
      </div>

      <nav>
        <Link to="/">Home</Link> | <Link to="/activities">Activities</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <section>
              {weatherForecasts.map((weather, index) => (
                <WeatherForecast key={index} weather={weather} />
              ))}
            </section>
          </>
        } />

        <Route path="/activities" element={
          <ActivitiesPage 
            activities={activities} 
            addActivity={addActivity} 
            removeActivity={removeActivity} 
          />
        } />
      </Routes>

      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
    </>
  );
}

export default App;