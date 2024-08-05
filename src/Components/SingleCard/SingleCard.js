import React from 'react';
import dayjs from "dayjs";

const SingleCard = ({ item, className, onClick }) => {
  const weekdayIndex = dayjs.unix(item.dt).day();
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <li
      className={`flex flex-col items-center ${className}`}
      onClick={onClick}
    >
      <img
        className="block h-10 md:h-12 lg:h-16 mx-auto"
        alt="weather-icon"
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <span className="block mt-2 text-center">{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
      <span className="block text-center mt-2 font-bold">{Math.round(item.temp.max)}°C</span>
    </li>
  );
};

export default SingleCard;
