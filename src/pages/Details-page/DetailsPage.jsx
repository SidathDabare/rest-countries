/** @format */

import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "./DetailsPage.css"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import Container from "react-bootstrap/Container"

const DetailsPage = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const selectedCountry = useSelector(
    (state) => state.setCountry.selectedCountry
  )

  const getNativeName = () => {
    const nativeName = Object.keys(selectedCountry.name.nativeName)[0]
    const nativeNameValue = selectedCountry.name.nativeName[nativeName].common
    return nativeNameValue
  }

  const getCurrencyName = () => {
    const currencyCode = Object.keys(selectedCountry.currencies)[0]
    const currencyName = selectedCountry.currencies[currencyCode].name
    return currencyName
  }

  const getLanguages = () => {
    const languagesValue = Object.values(selectedCountry.languages)
    const languages = languagesValue.join(", ")
    return languages
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  const navigate = useNavigate()
  useEffect(() => {
    console.log(selectedCountry)
  }, [])
  return (
    <>
      {selectedCountry && selectedCountry.flags ? (
        <Container
          className={
            !themeColor
              ? "details-page col-12 col-md-10 mx-auto dark-theame"
              : "details-page col-12 col-md-10 mx-auto light-theame"
          }>
          <div className='col-12 mx-auto px-4'>
            <div className='col-12 detail-page-top'>
              <button
                onClick={() => navigate("/rest-countries")}
                className={
                  !themeColor
                    ? "back-btn d-flex align-items-center details-page-dark"
                    : "back-btn d-flex align-items-center details-page-light"
                }>
                <KeyboardBackspaceIcon />
                <span className='mx-1 font-size fw-bold '>Back</span>
              </button>
            </div>
            <div className='detail-page-bottom col-12 d-flex flex-column flex-lg-row mx-auto justify-content-between align-items-center'>
              <div className='left-container col-11 col-sm-11 col-md-8 col-lg-6 d-flex justify-content-left align-items-center'>
                <img
                  className='detail-page-img'
                  src={
                    selectedCountry.flags.png ? selectedCountry.flags.png : ""
                  }
                  alt='flag'
                />
              </div>
              <div className='right-container col-12 col-sm-9 col-md-8 col-lg-6 mx-auto'>
                <div className='col-11 mx-auto'>
                  <h3 className='pb-2 fw-bold'>
                    {selectedCountry.name.common
                      ? selectedCountry.name.common
                      : ""}
                  </h3>
                </div>
                <div className='col-11 mx-auto d-flex flex-column flex-lg-row mx-auto justify-content-between align-items-start'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-6 py-2 mt-2'>
                    <small className='mb-0'>
                      <span className='fw-bold'>Native Name : </span>
                      <span> {getNativeName()}</span>
                    </small>
                    <br />
                    <small className='mb-0'>
                      <span className='fw-bold'>Population : </span>
                      <span>
                        {selectedCountry.population
                          ? numberWithCommas(selectedCountry.population)
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
                        {selectedCountry.subregion
                          ? selectedCountry.subregion
                          : ""}
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
                      <span>{getCurrencyName()}</span>
                    </small>
                    <br />
                    <small className='mb-0'>
                      <span className='fw-bold'>Languages: </span>
                      <span>{getLanguages()}</span>
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
                      {selectedCountry.borders &&
                      selectedCountry.borders.length > 0
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
        </Container>
      ) : (
        <div className='col-12 vh-100 d-flex justify-content-center align-items-center'>
          <Spinner animation='grow' variant='info' />
        </div>
      )}
    </>
  )
}

export default DetailsPage
