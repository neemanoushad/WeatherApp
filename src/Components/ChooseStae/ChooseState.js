import react, { useEffect } from "react";
import cities from '../../Data/in.json';
import { UseWeatherAppContext } from "../../Context/Context";
import axios from "axios";

const ChooseState = () => {

    const {state:{city}, dispatch} = UseWeatherAppContext();
    console.log('useWeatherAppContext', UseWeatherAppContext());


    const handleChange = (e)=>{
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0]
        // console.log('selectedCity', selectedCity);
        dispatch({
            type:'SET_CITY',
            payload:{...selectedCity}
        })
    }

    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

    const fetchData = ()=>{
        axios(ULR).then((data)=>{
            let _daily = data.data.daily
            dispatch({
                type:'SET_DAILY',
                payload:_daily
            })
            
            //console.log('data',data.data)
        })
    }

 useEffect(() => {
    fetchData();
     // eslint-disable-next-line
 }, [city])
 





    return(
        <>
        <div className="stateWrap">
        <select className="outline-none w-full box-border border-none rounded-full p-2.5 text-black font-bold shadow-[0_0_30px_-5px_rgba(0,0,0,0.25)] cursor-pointer transition-transform duration-200 ease-linear" defaultValue={city} onChange={handleChange}>
            {
                cities && cities.length > 0 && cities.map((city) => {
                    return(
                        <option key={`${city.population}${city.lat}`} value={city.city}> {city.city}-{city.admin_name}</option>
                    )
                })
            }
          


            </select>
        </div>

        </>
    )
}
export default ChooseState