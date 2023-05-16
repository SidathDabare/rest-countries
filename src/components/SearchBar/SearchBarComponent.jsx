/** @format */

import "./SearchBarComponent.css"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import SearchIcon from "@mui/icons-material/Search"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const SearchBarComponent = (props) => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)

  useEffect(() => {}, [])

  return (
    <div className='search-bar col-11 mx-auto px-0'>
      <div className='search-container col-12 d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <div className='col-12 col-sm-10 col-md-5 col-lg-5'>
          <InputGroup
            className={
              !themeColor
                ? "input-item-shadow-dark search-bar-dark"
                : "input-item-shadow-light search-bar-light"
            }>
            <InputGroup.Text
              id='basic-addon1'
              className={
                !themeColor
                  ? "border-right-none input-item search-bar-dark"
                  : "border-right-none input-item search-bar-light"
              }>
              <SearchIcon />
            </InputGroup.Text>
            <Form.Control
              className={
                !themeColor
                  ? "border-left-none input-item search-bar-dark text-white"
                  : "border-left-none input-item search-bar-light text-dark"
              }
              placeholder='Search for a country'
              aria-label='Search for a country'
              aria-describedby='basic-addon1'
              onChange={(e) => props.searchByName(e.target.value)}
            />
          </InputGroup>
        </div>
        <div className='select-div col-6 col-sm-6 col-md-5 col-lg-2  d-flex justify-content-end align-items-center '>
          <Form.Select
            aria-label='Default select example'
            defaultValue={"Filter by Region"}
            className={
              !themeColor
                ? "select-item search-bar-dark select-item-shadow-dark"
                : "select-item search-bar-light select-item-shadow-light"
            }
            onChange={(e) => props.filterbyregion(e.target.value)}>
            <option value='all'>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </Form.Select>
        </div>
      </div>
    </div>
  )
}

export default SearchBarComponent
