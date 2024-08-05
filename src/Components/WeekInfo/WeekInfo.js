import React, { useState, useEffect } from "react";
import { UseWeatherAppContext } from '../../Context/Context';
import SingleCardComponents from '../SingleCard/SingleCard';

const WeekInfo = () => {
  let { state: { daily }, dispatch } = UseWeatherAppContext();
  const [selectedCard, setSelectedCard] = useState(0);

  const updateCurrent = () => {
    return (
      dispatch({
        type: 'SET_CURRENT',
        payload: daily[selectedCard]
      })
    );
  };

  useEffect(() => {
    updateCurrent();
    // eslint-disable-next-line
  }, [daily, selectedCard]);

  return (
    <div className="bg-black bg-opacity-20 rounded-lg mb-6">
      <ul className="flex flex-wrap justify-center list-none p-0 my-2.5">
        {
          daily && daily.length > 0 ? daily.map((item, index) => {
            if (index < 7) {
              return (
                <SingleCardComponents
                  className={`m-2 p-4 rounded-lg cursor-pointer transition transform hover:scale-105 ${index === selectedCard ? "bg-gray-200 scale-105" : "bg-yellow hover:bg-gray-100"}`}
                  onClick={() => {
                    setSelectedCard(index);
                    updateCurrent();
                  }}
                  item={item}
                  key={index}
                />
              );
            }
            return null;
          }) : null
        }
      </ul>
    </div>
  );
};

export default WeekInfo;
