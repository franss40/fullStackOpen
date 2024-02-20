const Countries = ({ manycountries, onhandleshowcountry }) => {
  return (
    <div>
      {manycountries.map((country) => (
        <p key={country.area + Math.random()}>
          <b>{country.name.common}</b> <button onClick={() => onhandleshowcountry(country.name.common)}>show</button>
        </p>
      ))}
    </div>
  )
}

export default Countries