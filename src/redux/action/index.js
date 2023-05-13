/** @format */

export const SET_COLOR = "SET_COLOR"
export const SELECTED_COUNTRY = "SELECTED_COUNTRY"

export const setColor = (data) => {
  return {
    type: SET_COLOR,
    payload: data,
  }
}
export const selectedCountry = (data) => {
  return {
    type: SELECTED_COUNTRY,
    payload: data,
  }
}
