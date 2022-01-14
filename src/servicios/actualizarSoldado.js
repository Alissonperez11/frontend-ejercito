import {API} from '.'

export default function actualizarSoldado(id, body){
  const url = `${API}/soldado/${id}`

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(request => request.json())
    .then(response => response)
}