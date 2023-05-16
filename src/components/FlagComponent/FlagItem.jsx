/** @format */

import React, { useEffect } from "react"
import Card from "react-bootstrap/Card"
import "./FlagItem.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectedCountry } from "../../redux/action"

const FlagItem = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  const { country } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(() => {
    // console.log(country)
  }, [country])

  return (
    <div className='flag-item col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
      <Card
        onClick={async () => {
          await dispatch(selectedCountry(country))
          await navigate(`/deatails/${country.name.common}`)
        }}
        // onClick={handleCountry}
        className={
          !themeColor
            ? "flag-card col-9  mx-auto flag-card-dark"
            : "flag-card col-9  mx-auto flag-card-light"
        }>
        {country.flags.png ? (
          <Card.Img
            variant='top'
            src={country.flags.png}
            className='flag-card-image'
            alt="country's flag"
          />
        ) : (
          ""
        )}

        <Card.Body>
          <p className='fw-bold text-truncate font-size-smal'>
            {country.name.common ? country.name.common : ""}
          </p>
          <Card.Text>
            <small className='flag-card-text text-truncate font-size-smallest'>
              <span className='fw-bold'> Population : </span>
              <span>
                {country.population ? numberWithCommas(country.population) : ""}
              </span>
            </small>
            <br />
            <small className='flag-card-text text-truncate font-size-smallest'>
              <span className='fw-bold'>Region : </span>
              <span>{country.region ? country.region : ""}</span>
            </small>
            <br />
            <small className='flag-card-text text-truncate font-size-smallest'>
              <span className='fw-bold '>Capital : </span>
              <span className='text-truncate'>
                {country.capital && country.capital.length > 0
                  ? country.capital[0]
                  : "No Capital"}
              </span>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default FlagItem
