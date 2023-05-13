/** @format */

import { SELECTED_COUNTRY } from "../action/index"

const initialState = {
  selectedCountry: {},
}

const setCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      }
    default:
      return state
  }
}

export default setCountryReducer
