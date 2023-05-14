/** @format */

import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "./DetailsPage.css"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"

const DetailsPage = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const selectedCountry = useSelector(
    (state) => state.setCountry.selectedCountry
  )

  // get the currency code from the selectedCountry object
  const currencyCode = Object.keys(selectedCountry.currencies)[0]

  // get the currency name from the selectedCountry object
  const currencyName = selectedCountry.currencies[currencyCode].name

  // get the nativeName from the selectedCountry object
  const nativeName = Object.keys(selectedCountry.name.nativeName)[0]

  // get the nativeName from the selectedCountry object
  const nativeNameValue = selectedCountry.name.nativeName[nativeName].common

  // get all languages from the selectedCountry object
  const languagesValue = Object.values(selectedCountry.languages)

  const navigate = useNavigate()
  useEffect(() => {
    console.log(selectedCountry)
  }, [])
  return (
    <div
      className={
        !themeColor
          ? "details-page col-12 mx-auto dark-theame"
          : "details-page col-12 mx-auto light-theame"
      }>
      <div className='col-11 mx-auto'>
        <div className='col-12 detail-page-top'>
          <button
            onClick={() => navigate("/")}
            className={
              !themeColor
                ? "back-btn d-flex align-items-center details-page-dark"
                : "back-btn d-flex align-items-center details-page-light"
            }>
            <KeyboardBackspaceIcon />
            <span className='mx-1 font-size'>Back</span>
          </button>
        </div>
        <div className='detail-page-bottom col-12 d-flex flex-column flex-lg-row mx-auto justify-content-between align-items-center'>
          <div className='left-container col-11 col-sm-11 col-md-8 col-lg-6 d-flex justify-content-around align-items-center'>
            <img
              className='detail-page-img'
              src={selectedCountry.flags.png ? selectedCountry.flags.png : ""}
              alt='flag'
            />
          </div>
          <div className='right-container col-12 col-sm-9 col-md-8 col-lg-6 mx-auto'>
            <div className='col-11 mx-auto'>
              <h3 className='pb-2 fw-bold'>
                {selectedCountry.name.common ? selectedCountry.name.common : ""}
              </h3>
            </div>
            <div className='col-11 mx-auto d-flex flex-column flex-lg-row mx-auto justify-content-between align-items-start'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6 py-2 mt-2'>
                <small className='mb-0'>
                  <span className='fw-bold'>Native Name : </span>
                  <span>{nativeNameValue ? nativeNameValue : ""}</span>
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Population : </span>
                  <span>
                    {selectedCountry.population
                      ? selectedCountry.population
                      : ""}
                  </span>
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Region : </span>
                  <span>
                    {selectedCountry.region ? selectedCountry.region : ""}
                  </span>
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Sub Region : </span>
                  <span>
                    {selectedCountry.subregion ? selectedCountry.subregion : ""}
                  </span>
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Capital : </span>
                  <span>
                    {selectedCountry.capital &&
                    selectedCountry.capital.length > 0
                      ? selectedCountry.capital.map((item) => item)
                      : "No Capital"}
                  </span>
                </small>
              </div>
              <div className='col-12 col-sm-12 col-md-12 col-lg-6 py-2 mt-2'>
                <small className='mb-0'>
                  <span className='fw-bold'>Top Level Domain : </span>
                  {selectedCountry.tld && selectedCountry.tld.length > 0
                    ? selectedCountry.tld.map((domain, i) => (
                        <span key={i}>
                          {domain}
                          {i === selectedCountry.tld.length - 1 ? "" : ", "}
                        </span>
                      ))
                    : ""}
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Currencies : </span>
                  <span>{currencyName}</span>
                </small>
                <br />
                <small className='mb-0'>
                  <span className='fw-bold'>Languages: </span>
                  {languagesValue && languagesValue.length > 0
                    ? languagesValue.map((language, i) => (
                        <span key={i}>
                          {language}
                          {i === languagesValue.length - 1 ? "" : ", "}
                        </span>
                      ))
                    : ""}
                </small>
                <br />
              </div>
            </div>
            <div className='col-11 mx-auto py-2 my-4'>
              <small className='d-flex flex-column flex-lg-row mx-auto justify-content-start align-items-start'>
                <div className='col-12 col-md-2 fw-bold border-country-span d-flex align-items-center py-1'>
                  <span> Border Countries : </span>
                </div>

                <div className='col-12 col-md-10 d-inline-flex flex-wrap align-items-center'>
                  {selectedCountry.borders && selectedCountry.borders.length > 0
                    ? selectedCountry.borders.map((border, i) => (
                        <span
                          key={i}
                          className={
                            !themeColor
                              ? "border-countries details-page-dark"
                              : "border-countries details-page-light"
                          }>
                          {border}
                        </span>
                      ))
                    : "None"}
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
