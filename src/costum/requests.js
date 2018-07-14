/* eslint-disable */
import axios from 'axios'

function getAnimDataAntonio() {
  return axios.get('/anim-antonio.json')
}


export {
  getAnimDataAntonio
}