/** @format */
import React, { useEffect, useState } from "react"
import SearchBarComponent from "../../components/SearchBar/SearchBarComponent"
import "./Home.css"
// import data from "../../data.json"
import FlagItem from "../../components/FlagComponent/FlagItem"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"

const Home = () => {
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all")
      const data = await response.json()
      // console.log(data[0])
      setLoading(true)
      setCountries(data)
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }

  const searchByName = (name) => {
    if (name.length > 0) {
      const filterByName = countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      )
      // console.log(filterByName)

      setCountries(filterByName)
      setLoading(true)
    } else if (name.length === 0) {
      getCountries()
      setLoading(false)
    }
  }

  const filterByRegion = async (region) => {
    if (region === "all") {
      getCountries()
    } else
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        )
        const data = await response.json()
        setLoading(true)
        setCountries(data)
      } catch (error) {
        console.log(error)
        setError(true)
        setLoading(false)
      }
  }

  useEffect(() => {
    if (search.length > 0) {
      searchByName(search)
    } else getCountries()

    // console.log(countries)
  }, [loading, error, search])
  return (
    <Container>
      <SearchBarComponent
        // setsearch={setSearch}
        search={search}
        searchByName={searchByName}
        filterbyregion={filterByRegion}
      />
      <div className='flag-container mx-auto px-0 col-12'>
        {loading ? (
          <div className='col-12 mx-auto d-flex flex-wrap pb-5 px-3'>
            {countries.map((country, i) => (
              <FlagItem key={i} country={country} />
            ))}
          </div>
        ) : (
          <div className='col-12 vh-100 d-flex justify-content-center align-items-center'>
            <Spinner animation='grow' variant='info' />
          </div>
        )}
      </div>
    </Container>
  )
}

export default Home
