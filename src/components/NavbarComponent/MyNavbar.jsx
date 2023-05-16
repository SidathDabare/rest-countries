/** @format */

import React, { useState } from "react"
import "./MyNavbar.css"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../../redux/action"
import Container from "react-bootstrap/Container"

const MyNavbar = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  const dispatch = useDispatch()
  const [theme, setTheme] = useState(false)

  const setColorTheme = () => {
    dispatch(setColor(theme))
  }
  return (
    <div
      className={
        !themeColor
          ? "col-12 my-navbar my-nav-dark mx-auto px-0"
          : "col-12 my-navbar my-nav-light border-bottom mx-auto px-0"
      }>
      <Container className='nav-container d-flex mx-auto justify-content-between align-items-center px-0'>
        <div className='col-6 nav-left'>
          <h5 className='mb-0 fw-bold'>Where in the world?</h5>
        </div>
        <div
          className='nav-right col-6 d-flex justify-content-end align-items-center cursor-pointer'
          onClick={() => {
            setTheme(!theme)
            setColorTheme()
            // setToggleBtn(false)
          }}>
          {themeColor ? (
            <DarkModeOutlinedIcon className='icon-sizes mx-2' />
          ) : (
            <DarkModeIcon className='icon-sizes mx-2' />
          )}

          <small className='font-size-small mb-0 fw-bold'>Dark Mode</small>
        </div>
      </Container>
    </div>
  )
}

export default MyNavbar
