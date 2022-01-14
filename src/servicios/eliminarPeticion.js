import {API} from '.'

export default function eliminarPeticion(id){
  const url = `${API}/ascenso/${id}`

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}