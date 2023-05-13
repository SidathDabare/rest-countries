/** @format */

import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
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

  useEffect(() => {}, [country])

  return (
    <div className='flag-item col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
      <Card
        onClick={async () => {
          await dispatch(selectedCountry(country))
          await navigate(`/${country.name}`)
        }}
        className={
          !themeColor
            ? "flag-card col-9  mx-auto flag-card-dark"
            : "flag-card col-9  mx-auto flag-card-light"
        }>
        <Card.Img
          variant='top'
          src={country.flags.png}
          className='flag-card-image'
        />
        <Card.Body>
          <Card.Title className='fw-bold text-truncate'>
            {country.name}
          </Card.Title>
          <Card.Text>
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold'> Population : </span>
              <span>{country.population}</span>
            </small>
            <br />
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold'>Region : </span>
              <span>{country.region}</span>
            </small>
            <br />
            <small className='flag-card-text text-truncate'>
              <span className='fw-bold '>Capital : </span>
              <span>{country.capital}</span>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
export default FlagItem
