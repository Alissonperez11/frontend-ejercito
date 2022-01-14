import {API} from '.'

export default function leerEstadoInstrumentos(){

  const url = `${API}/instrumentos/estado`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}