import axios from 'axios'
import { FAVORITE_BOOTH } from './types'

export const favoriteBooth = (selectedBooth) => dispatch => {
  console.log(selectedBooth)
  dispatch({
    type: FAVORITE_BOOTH,
    payload: selectedBooth
  })
}