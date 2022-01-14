import {API} from '.'

export default function eliminarFalta(id){
  const url = `${API}/faltas/${id}`

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(request => request.json())
    .then(response => response)
}