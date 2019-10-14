/* eslint-disable */
import axios from 'axios'

function getAnimDataAntonio() {
  return axios.get('/anim-antonio.json')
}

function openCv() {
  const path = '/antonio-santos-cv.pdf'
  window.open(path)
}

export { getAnimDataAntonio, openCv }
