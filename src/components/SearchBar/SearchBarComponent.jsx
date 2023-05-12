/** @format */

import { Row } from "react-bootstrap"
import "./SearchBarComponent.css"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import SearchIcon from "@mui/icons-material/Search"
import { useSelector } from "react-redux"

const SearchBarComponent = () => {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  return (
    <div className='search-bar col-12'>
      <div className='search-container col-11 d-flex mx-auto justify-content-between align-items-center'>
        <div className='col-5'>
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
            />
          </InputGroup>
        </div>
        <div className='col-2 d-flex justify-content-end align-items-center'>
          <Form.Select
            aria-label='Default select example'
            className='bg-transparent'>
            <option selected>Filter by Region</option>
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
