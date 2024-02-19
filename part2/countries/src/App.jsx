import { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'

function App() {
  const [findCountry, setFindCountry] = useState('')
  const [countries, setCountries] = useState([])

  const urlBase = "https://studies.cs.helsinki.fi/restcountries/api/all/"

  useEffect(() => {
    axios
      .get(urlBase)
      .then(response => {console.log(response.data); setCountries(response.data)})
  }, [])

  let find = countries

  if (findCountry !== '') {
    find = countries.filter(datas => {
      if (datas.name.common.toUpperCase().indexOf(findCountry.toUpperCase().trim()) !== -1) {
        return datas
      }
    })
  }

  console.log('número de países: ' + find.length, find)
  return (
    <>
      <p>
        find countries{" "}
        <input
          type="text"
          value={findCountry}
          onChange={(event) => setFindCountry(event.target.value)}
        />
      </p>

      {
        find.length > 10 ? 
          "Too many matches, specify another filter" : 
          find.length !== 1 ?           
            <Countries manycountries={find} /> :          
            <Country onecountry={find[0]} />
      }
    </>
  )
}

export default App
