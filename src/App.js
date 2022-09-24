import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Loadcountries></Loadcountries>
    </div>
  );
}

function Loadcountries() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country
            name={country.name}
            population={country.population}
            flags={country.flags.png}
          ></Country>
        ))}
      </div>
    </div>
  );
}

function Country(props) {
  return (
    <div className="country">
      <img src={props.flags} alt="" />
      <h2>Name: {props.name}</h2>
      <p>Population: {props.population}</p>
    </div>
  );
}

export default App;
