import React from 'react';
import wallpaper from '../../Asset/wallpaper.jpg';
import ChooseState from '../ChooseStae/ChooseState';
import WeekInfo from '../WeekInfo/WeekInfo';
import LeftSide from '../Left/LeftSide';

function Home() {
  return (
    <div
      className="homewrap flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div
        className="weatherSection flex flex-col md:flex-row rounded-lg shadow-lg text-white m-4 md:m-8 h-auto bg-black/20 border-2 border-black p-4 md:p-6"
      >
        <LeftSide />

        <div className="rightSide text-black flex-1 pt-4 md:pt-6 pr-4 md:pr-6">
          <ChooseState />
          <WeekInfo />
        </div>
      </div>
    </div>
  );
}

export default Home;
