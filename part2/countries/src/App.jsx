import { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'

function App() {
  const [findCountry, setFindCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState([])

  const urlBase = "https://studies.cs.helsinki.fi/restcountries/api/all/"

  useEffect(() => {
    axios
      .get(urlBase)
      .then(response => {setCountries(response.data)})
  }, [])

  const handleShowCountry = (name) => {
    setShowCountry(countries.find(country => country.name.common === name))
  }

  let find = countries
  if (showCountry.length === 0) {
    if (findCountry !== "") {
      find = countries.filter((datas) => {
        if (
          datas.name.common
            .toUpperCase()
            .indexOf(findCountry.toUpperCase().trim()) !== -1
        ) {
          return datas
        }
      })
    }
  } else {
    find = [].concat(showCountry)
  }
  
  return (
    <>
      <p>
        find countries{" "}
        <input
          type="text"
          value={findCountry}
          onChange={(event) => {setFindCountry(event.target.value); if (showCountry) setShowCountry([])}}
        />
      </p>

      {
        find.length > 10 ? 
          "Too many matches, specify another filter" : 
          find.length !== 1 ?           
            <Countries manycountries={find} onhandleshowcountry={handleShowCountry} /> :          
            <Country onecountry={find[0]} />
      }
    </>
  )
}

export default App
