/** @format */

import { SET_COLOR } from "../action/index.js"

const initialState = {
  selectedColor: null,
}
export const setColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        selectedColor: action.payload,
      }

    default:
      return state
  }
}
