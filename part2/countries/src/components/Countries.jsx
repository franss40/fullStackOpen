const Countries = ({ manycountries }) => {
  return (
    <div>
      {manycountries.map((country) => (
        <p key={country.flag}>
          <b>{country.name.common}</b>
        </p>
      ))}
    </div>
  )
}

export default Countries;