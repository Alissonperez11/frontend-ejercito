import { useState, useEffect } from 'react'
import { recargar } from '../funciones'
import actualizarFalta from '../servicios/actualizarFalta'
import eliminarFalta from '../servicios/eliminarFalta'
import leerFaltasDisciplinarias from '../servicios/leerFaltasDisciplinarias'

const datosIniciales = {
  falta_disciplinarias_id: '',
  faltadisci_gravedad: ''
}

function ListaFaltasDisciplinarias() {
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)

  const [form, setForm] = useState(datosIniciales)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.falta_disciplinarias_id || !form.faltadisci_gravedad) {
      alert('Datos incompletos')
      return
    }else{
      actualizacion(form)
    }
  }

  const actualizacion = (body) => {
    let {falta_disciplinarias_id, faltadisci_gravedad} = body
    actualizarFalta(falta_disciplinarias_id,{falta_disciplinarias_id, faltadisci_gravedad})
    setReload(!reload)
    setForm(datosIniciales)
  }

  useEffect(function(){
    leerFaltasDisciplinarias().then(fd => setData(fd))
  }, [reload])

  return (
    <>
      <div>

        <div>
          <h3>Crea o actualiza una falta disciplinaria</h3>
          <form onSubmit={handleSubmit}>
            <div className='fdd'>
              <label htmlFor="id">Id: </label> 
              <input type="number" name="falta_disciplinarias_id" id="id"
              onChange={handleChange} value={form.falta_disciplinarias_id} className='right'/>

              <label htmlFor="cantidad">Gravedad: </label>
              <input type="text" name="faltadisci_gravedad" id="cantidad"
              onChange={handleChange} value={form.faltadisci_gravedad} className='right'/>

              <input type="submit" value="Enviar" className="form__button"/>
            </div>
          </form>
        </div>

        <div>
          <h3>Listado de faltas disciplinarias</h3>
          <table >
          <thead>
          <tr>
            <th>ID</th>
            <th>GRAVEDAD</th>
            <th colSpan={2}>ACCIONES</th>
          </tr>
          </thead>
          {
            data.map((fd) => {
              return(
                <>
                  <tr>
                    <td>{fd.falta_disciplinarias_id}</td>
                    <td>{fd.faltadisci_gravedad}</td>
                    <td>
                      <button className='action'
                        onClick={() => setForm(fd)}
                      >Editar</button>
                    </td>
                    <td>
                      <button className='action'
                        onClick={ async () => {
                          await eliminarFalta(fd.falta_disciplinarias_id)
                          setReload(!reload)
                        }}
                      >Eliminar</button>
                    </td>
                  </tr>
                </>
              )
            })
          }
          </table>
        </div>
        
      </div>
    </>
  )
}

export default ListaFaltasDisciplinarias