import {API} from '.'

export default function leerFaltasDisciplinarias(){

  const url = `${API}/faltas`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}