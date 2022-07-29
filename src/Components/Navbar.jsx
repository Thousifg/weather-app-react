import React, { useEffect, useState } from "react";
import Card1, { Card2 } from "./Cards";
import Forecast from "./Forecast";
import Main from "./Main";
import Chart from "./Chart";
// FiSearch

const Navbar = () => {
  let [city, setCity] = useState();
  let [name, setName] = useState("mumbai");
  let [search, setSearch] = useState("mumbai");
  let [isloading, setIsloading] = useState(true);

  useEffect(() => {
    getlocation();
    setIsloading (true);
    const fetchApi = async () => {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=232c4483a75b4b3ca5692328223105&q=${search}&aqi=yes&days=10`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchApi();
    setIsloading (false);
  }, [search]);
  
  const getlocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currCityWeather);
    } else {
      console.log("Please allow the location")
    }
  };

  return (
    <>
      <div className="p-2 lg:p-6 flex flex-col z-40 lg:flex-row items-center justify-center dark:border-slate-200">
        <form
          className="m-2 lg:mr-32"
          onSubmit={(props) => {
            props.preventDefault();
            console.log(props.name);
            setSearch(name);
          }}
        >
          <input
            aria-label="search"
            className="outline-none p-2 w-72 rounded-lg drop-shadow"
            type={"search"}
            placeholder="search city"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-white p-2 border-l-2 rounded-lg drop-shadow"
            type="submit"
          >
            🔍
          </button>
        </form>
      </div>
      {isloading ?
      <p>Loading...</p>:
      city ? (
        <div className="flex flex-col lg:flex-row gap-3 w-full p-6">
          <Main temp_c={city.current.temp_c} />
          <div className="lg:w-2/3 w-full flex flex-col sm:flex-row sm:gap-x-3 ">
            <div className="h-full w-full sm:w-1/2">
              <Forecast data={city.forecast.forecastday} />
              <Chart data={city.forecast.forecastday[0].hour} />
            </div>

            <div className="flex flex-col gap-y-2 h-full w-full sm:w-1/2">
              <Card1
                uv={city.current.uv}
                humidity={city.current.humidity}
                wind={city.current.wind_kph}
              />
              <Card2
                sunrise={city.forecast.forecastday[0].astro.sunrise}
                sunset={city.forecast.forecastday[0].astro.sunset}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center p-4">city not found</p>
      )
    }
    </>
  );
};

export default Navbar;
