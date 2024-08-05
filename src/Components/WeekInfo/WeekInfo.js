import React, { useState, useEffect } from "react";
import { UseWeatherAppContext } from '../../Context/Context';
import SingleCardComponents from '../SingleCard/SingleCard';

const WeekInfo = () => {
  let { state: { daily }, dispatch } = UseWeatherAppContext();
  const [selectedCard, setSelectedCard] = useState(0);

  const updateCurrent = () => {
    dispatch({
      type: 'SET_CURRENT',
      payload: daily[selectedCard]
    });
  };

  useEffect(() => {
    updateCurrent();
    // eslint-disable-next-line
  }, [daily, selectedCard]);

  return (
    <div className="bg-white bg-opacity-20 rounded-lg mb-6 p-4 mt-4">
      <ul className="flex flex-wrap justify-center gap-4">
        {
          daily && daily.length > 0 ? daily.slice(0, 7).map((item, index) => (
            <li key={index} className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/6`}>
              <SingleCardComponents
                className={`m-2 p-4 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${index === selectedCard ? "bg-gray-200 scale-105" : "bg-yellow hover:bg-gray-100"}`}
                onClick={() => {
                  setSelectedCard(index);
                  updateCurrent();
                }}
                item={item}
              />
            </li>
          )) : null
        }
      </ul>
    </div>
  );
};

export default WeekInfo;
