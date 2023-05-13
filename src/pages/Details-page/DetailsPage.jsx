/** @format */

import React, { useEffect } from "react"
import { useSelector } from "react-redux"

const DetailsPage = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const selectedCountry = useSelector(
    (state) => state.setCountry.selectedCountry
  )

  useEffect(() => {
    console.log(selectedCountry)
    console.log(themeColor)
  }, [])
  return (
    <div>
      <h1>{selectedCountry.name}</h1>
    </div>
  )
}

export default DetailsPage
