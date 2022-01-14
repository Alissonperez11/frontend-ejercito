import {API} from '.'

export default function leerPeticiones(){

  const url = `${API}/ascenso`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}