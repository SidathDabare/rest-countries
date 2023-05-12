/** @format */

export const SET_COLOR = "SET_COLOR"

export const setColor = (data) => {
  return {
    type: SET_COLOR,
    payload: data,
  }
}
