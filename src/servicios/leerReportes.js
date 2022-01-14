import {API} from '.'

export default function leerReportes(){

  const url = `${API}/instrumentos/reporte`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}