import {API} from '.'

export default function leerSoldados(){

  const url = `${API}/soldado`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}