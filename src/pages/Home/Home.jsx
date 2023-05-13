/** @format */
import React, { useEffect, useState } from "react"
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent"
import "./Home.css"
import data from "../../data.json"
import FlagItem from "../../components/FlagComponent/FlagItem"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
const Home = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  const searchByName = (name) => {
    if (name.length > 1) {
      const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      )
      setCountries(filteredCountries)
    } else {
      setCountries(data)
    }
  }
  const filterByRegion = (region) => {
    if (region === "all") {
      setCountries(data)
    } else {
      const filteredCountries = data.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      )
      setCountries(filteredCountries)
    }
  }

  useEffect(() => {
    // console.log(data)
    searchByName(search)
    // console.log(countries[0])
  }, [search])
  return (
    <div>
      <SearchBarComponent
        setsearch={setSearch}
        filterbyregion={filterByRegion}
      />
      <div className='flag-container col-11 mx-auto'>
        {countries &&
          countries.map((country, i) => <FlagItem key={i} country={country} />)}
      </div>
    </div>
  )
}

export default Home
