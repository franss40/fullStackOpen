import { useEffect, useState } from "react"
import axios from 'axios'

const Country = ({ onecountry }) => {
  const [weather, setWeather] = useState({})

  const showCode = (id) => {
    let code
    const group1 = [500, 501, 502, 503, 504]
    if (group1.includes(id)) {
      code = '10d'
    } else if (id === 511) {
      code = '13d'
    } else {
      code = '09d'
    }

    switch (Math.trunc(id/100)) {
      case 2:
        code = '11d'
        break;
      case 3:
        code = '09d'
        break
      case 6:
        code = '13d'
        break
      case 7:
        code = '50d'
        break
      default:
        break;
    }

    if (id == 800) {
      code = '01d'
    } else if (id == 801) {
      code = '02d'
    } else if (id == 802) {
      code = '03d'
    } else if (id == 803 || id == 804) {
      code = '04d'
    }

    return code
  }

  useEffect(() => {
    const urlBase = `http://api.openweathermap.org/data/2.5/weather?q=${onecountry.capital[0]}&APPID=${import.meta.env.VITE_KEY}&units=metric`
    axios.get(urlBase).then(response => {
      setWeather(response.data)
    })
  }, [onecountry.capital])

  if (Object.keys(weather).length === 0) {
    return
  }

  return (
    <div>
      <h1>{onecountry.name.common}</h1>
      <p>capital {onecountry.capital[0]}</p>
      <p>area {onecountry.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.keys(onecountry.languages).map((element) => (
          <li key={onecountry.area + Math.random()}>
            {onecountry.languages[element]}
          </li>
        ))}
      </ul>
      <img src={onecountry.flags.png} alt="flags" />
      <h3>Weather in {onecountry.capital[0]}</h3>
      <p>temperature {weather.main.temp} Celcius</p>

      <img src={`https://openweathermap.org/img/wn/${showCode(weather.weather[0].id)}@2x.png`} alt="tiempo" />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Country
