import './App.css';
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const searchButton = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=046969aae2d05b6bebfb15233fb921f2`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result)
      });
  };

  return (
    <div className="container grid">
      
      <div className="weather">
        {/* Search Box */}
    
<select placeholder='Select City' onChange={(e) => setCity(e.target.value)}>
  <option value="" disabled selected>Select</option>
  <option>Lahore</option>
  <option>Islamabad</option>
  <option>BhahawalNagar</option>
  <option>Multan</option>

</select>
        {/* <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} /> */}
        <button onClick={searchButton} className='contrast'>Search</button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
