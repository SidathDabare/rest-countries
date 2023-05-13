/** @format */

import React, { useState } from "react"
import { Row } from "react-bootstrap"
import "./MyNavbar.css"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { useDispatch, useSelector } from "react-redux"
import { setColor } from "../../redux/action"
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
          ? "col-12 my-navbar my-nav-dark"
          : "col-12 my-navbar my-nav-light border-bottom"
      }>
      <div className='nav-container col-11 d-flex mx-auto align-items-center'>
        <div className='col-6'>
          <h5 className='mb-0 fw-bold'>Where in the world?</h5>
        </div>
        <div
          className='col-6 d-flex justify-content-end align-items-center cursor-pointer'
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

          <h6 className='font-size mb-0 fw-bold'>Dark Mode</h6>
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
