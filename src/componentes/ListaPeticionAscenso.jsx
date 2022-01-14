import { useState, useEffect } from 'react'
import { recargar } from '../funciones'
import actualizarPeticion from '../servicios/actualizarPeticion'
import eliminarPeticion from '../servicios/eliminarPeticion'
import leerPeticiones from '../servicios/leerPeticiones'

const datosIniciales = {
  peticion_ascenso_id: '',
  rango_id: '',
  soldado_id: '',
  peticion_ascenso_fecha: '',
  peticion_ascenso_observaciones: '',
  peticion_ascenso_aprobacion: ''
}

function ListaPeticionAscenso() {
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

    if (!form.peticion_ascenso_id || !form.rango_id || !form.soldado_id ||
      !form.peticion_ascenso_fecha || !form.peticion_ascenso_observaciones ||
      !form.peticion_ascenso_aprobacion) {
      alert('Datos incompletos')
      return
    }else{
      actualizacion(form)
    }
  }

  const actualizacion = (body) => {
    let { peticion_ascenso_id, rango_id, soldado_id, peticion_ascenso_fecha,
      peticion_ascenso_observaciones, peticion_ascenso_aprobacion} = body

    actualizarPeticion(
      peticion_ascenso_id,
      {
        peticion_ascenso_id, rango_id, soldado_id, peticion_ascenso_fecha,
        peticion_ascenso_observaciones, peticion_ascenso_aprobacion
      }
    )
    setReload(!reload)
    setForm(datosIniciales)
    recargar()
  }

  useEffect(function(){
    leerPeticiones().then(p => setData(p))
  }, [reload])

  return (
    <>
      <div>

        <div>
          <h3>Crea o actualiza una petición de ascenso</h3>
          <form onSubmit={handleSubmit} >
            <div className='fdd'>

              <label htmlFor="id">Id: </label> 
              <input type="number" name="peticion_ascenso_id" id="id"
              onChange={handleChange} value={form.peticion_ascenso_id} className='right'/>

              <label htmlFor="cantidad">Id rango: </label>
              <input type="number" name="rango_id" id="cantidad"
              onChange={handleChange} value={form.rango_id} className='right'/>

              <label htmlFor="soldado">Id soldado: </label>
              <input type="number" name="soldado_id" id="soldado"
              onChange={handleChange} value={form.soldado_id} className='right'/>

              <label htmlFor="fecha">Fecha: </label>
              <input type="date" name="peticion_ascenso_fecha" id="fecha"
              onChange={handleChange} value={form.peticion_ascenso_fecha} className='right'/>
              <br></br> <br />
              <label htmlFor="ob">Observaciones: </label>
              <input type="text" name="peticion_ascenso_observaciones" id="ob"
              onChange={handleChange} value={form.peticion_ascenso_observaciones} className='right'/>

              <label htmlFor="ap">Aprobación: </label>
              <input type="text" name="peticion_ascenso_aprobacion" id="ap"
              onChange={handleChange} value={form.peticion_ascenso_aprobacion} className='right'/>

              <input type="submit" value="Enviar" className="form__button"/>
            </div>
          </form>
        </div>

        <div>
          <h3>Listado de peticiones de ascenso</h3>
          <table border="1">
          <thead>
          <tr>
            <th>ID</th>
            <th>ID_RANGO</th>
            <th>ID_SOLDADO</th>
            <th>FECHA</th>
            <th>OBSERVACIONES</th>
            <th>ESTADO</th>
            <th colSpan={2}>ACCIONES</th>
          </tr>
          </thead>
          {
            data.map((p) => {
              return(
                <>
                  <tr>
                    <td>{p.peticion_ascenso_id}</td>
                    <td>{p.rango_id}</td>
                    <td>{p.soldado_id}</td>
                    <td>{p.peticion_ascenso_fecha.slice(0, 10)}</td>
                    <td>{p.peticion_ascenso_observaciones}</td>
                    <td>{p.peticion_ascenso_aprobacion.toString()}</td>
                    <td>
                      <button className='action'
                        onClick={() => {
                          p.peticion_ascenso_fecha = p.peticion_ascenso_fecha.slice(0, 10)
                          setForm(p)
                        }}
                      >Editar</button>
                    </td>
                    <td>
                      <button className='action'
                        onClick={ async () => {
                          await eliminarPeticion(p.peticion_ascenso_id)
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

export default ListaPeticionAscenso