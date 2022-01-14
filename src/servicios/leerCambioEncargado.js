import {API} from '.'

export default function leerCambioEncargado(){

  const url = `${API}/soldado/cambioencargado`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}