import {API} from '.'

export default function leerInstrumentos(){

  const url = `${API}/instrumentos`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}