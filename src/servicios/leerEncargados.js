import {API} from '.'

export default function leerEncargado(){

  const url = `${API}/soldado/encargado`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}