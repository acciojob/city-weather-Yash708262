import React, { useState, useEffect } from "react";

const App = () => {
  const API_KEY = "985cb0c563a4a40ad654ecb25361aa98";

  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!query) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setQuery(""); 
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="weather">
      <input
        className="search"
        placeholder="Enter city"
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      {data && data.main && data.weather && (
        <>
          <p>City: {data.name}</p>
          <p>Temp: {data.main.temp}°C</p>
          <p>{data.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default App;

