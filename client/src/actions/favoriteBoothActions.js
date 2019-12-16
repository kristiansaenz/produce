import axios from 'axios'
import { FAVORITE_BOOTH, UNFAVORITE_BOOTH } from './types'

export const favoriteBooth = (id, selectedBooth) => dispatch => {
  console.log(id, selectedBooth)

  axios.post('/users/addFavoriteBooth', {
    id: id,
    booth: selectedBooth
  })
  .then(res => {
    dispatch({
      type: FAVORITE_BOOTH,
      payload: selectedBooth
    })
  })
}

export const unFavoriteBooth = (id, selectedBooth) => dispatch => {

  axios.post('/users/removeFavoriteBooth', {
    id: id,
    booth: selectedBooth
  })
  .then(res => {
    dispatch({
      type: UNFAVORITE_BOOTH,
      payload: res.data
    })
  })
}