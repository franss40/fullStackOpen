const Country = ({ onecountry }) => {
  console.log(onecountry)
  return (
    <div>
      <h1>{onecountry.name.common}</h1>
      <p>capital {onecountry.capital[0]}</p>
      <p>area {onecountry.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.keys(onecountry.languages).map((element) => (
          <li key={onecountry.element}>{onecountry.languages[element]}</li>
        ))}
      </ul>
      <img src={onecountry.flags.png} alt="flags" />
    </div>
  )
}

export default Country;