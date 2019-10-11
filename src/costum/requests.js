/* eslint-disable */
import axios from 'axios'

function getAnimDataAntonio() {
  return axios.get('/anim-antonio.json')
}

async function downloadCv() {
  const { data } = await axios({
    url: '/antonio-santos-cv.pdf',
    method: 'GET',
    responseType: 'blob'
  })

  const fileURL = window.URL.createObjectURL(new Blob([data]))
  const fileLink = document.createElement('a')

  fileLink.href = fileURL
  fileLink.setAttribute('download', 'antonio-santos.pdf')
  document.body.appendChild(fileLink)

  fileLink.click()
}

export { getAnimDataAntonio, downloadCv }
