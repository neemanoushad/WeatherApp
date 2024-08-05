import React from 'react'
import wallpaper from '../../Asset/wallpaper.jpg';
import ChooseState from '../ChooseStae/ChooseState'
import WeekInfo from '../WeekInfo/WeekInfo';
import LeftSide from '../Left/LeftSide'

function Home() {
  return (
    <div className="homewrap flex items-center justify-center h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url(${wallpaper})` }}>
<div className="weatherSection flex rounded-[25px] shadow-[4px_6px_6px_7px_rgba(0,0,0,0.1)] text-white m-5 h-max bg-black/10 border-2 border-black p-0">
   <LeftSide/>

    <div className="rightSide text-black relative float-left h-full pt-6 pr-5">

        <ChooseState/>
        <WeekInfo/>
      
    </div>

</div>



    </div>
  )
}

export default Home