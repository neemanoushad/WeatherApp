import dayjs from "dayjs";
import  {UseWeatherAppContext} from '../../Context/Context';
const LeftComponents = ()=>{
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    const {state:{city,current}} = UseWeatherAppContext();

    if (!current) return <div>Loading...</div>;
    //console.log('current',city)
    const weekdayIndex = dayjs.unix(current.dt).day();
    return (
        <div className="flex flex-col justify-around p-4 sm:p-5 rounded-lg sm:rounded-2xl w-full sm:w-72 transition-transform duration-300 ease-in-out transform scale-100 sm:scale-105 bg-[#000e1b] m-2 sm:mr-2.5 shadow-lg">
                      <div className='dateWrap'>
                    <h2>{WEEKDAYS[weekdayIndex]}</h2>
                    <span className="dateDay">
                        {dayjs.unix(current.dt).format("DD MMM YYYY")}
                    </span>
                    <span className="block mt-2 sm:mt-2.5 md:mt-3 lg:mt-4 xl:mt-5">{city.city} - {city.admin_name} - {city.country}</span>
                </div>
                <div className="weatherContainer">
                    <img
                    className="weatherIcon" alt="myit"
                    src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    />
                    <h1 className="weatherTemp">{Math.round(current.temp.max)}°C</h1>
                    <h3 className="weatherDesc">{current.weather[0].main}</h3>
                </div>
            </div>
        
    )
}

export default LeftComponents;

   