import { useState, useEffect } from 'react'
import leerCambioEncargado from '../servicios/leerCambioEncargado'
import leerSoldados from '../servicios/leerSoldados'
import leerEncargado from '../servicios/leerEncargados'
import Soldado from './Soldado'
import Encargado from './Encargado'
import CambioEncargado from './CambioEncargado'
import actualizarSoldado from '../servicios/actualizarSoldado'
import { recargar } from '../funciones'

const datosIniciales = {
  soldado_id: '',
  batallon_id: ''
}

function ListaSoldados() {
  const [data, setData] = useState([])
  const [encargado, setEncargado] = useState([])
  const [cambioEncargado, setCambioEncargado] = useState([])
  const [consola, setConsola] = useState('')

  useEffect(function(){
    leerSoldados().then(soldado => setData(soldado))
    leerEncargado().then(encargado => setEncargado(encargado))
    leerCambioEncargado().then(cambioEncargado => setCambioEncargado(cambioEncargado))
  }, [])

  const [form, setForm] = useState(datosIniciales)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.soldado_id || !form.batallon_id) {
      alert('Datos incompletos')
      return
    }else{
      actualizacion(form)
    }
  }

  const actualizacion = async (body) => {
    let {soldado_id, batallon_id} = body
    const resultado = await actualizarSoldado(soldado_id,{soldado_id, batallon_id})
    setConsola(resultado.message)
    recargar()
  }

  return (
    <>
      <div className='gridInstrumentos'>
        <div>
          <h3>Lista Soldados</h3>
          {
            data.map((s) => <Soldado key={s.soldado_id} soldado={s}/>)
          }
        </div>
        <div>
          <h3>Lista Encargado</h3>
          {
            encargado.map((e) => <Encargado key={e.encargado_id} encargado={e}/>)
          }
        </div>
        <div>
          <h3>Lista CambioEncargado</h3>
          {
            cambioEncargado.map((ce) => <CambioEncargado key={ce.cambioencargado_id} encargado={ce}/>)
          }
        </div>
        <div>
          <h3>Actualizar Soldado</h3>
          <form onSubmit={handleSubmit} className='top'>
            <div>
              <div className='act-es'>
                <div>
                  <label htmlFor="id">Id soldado:</label>
                  <input type="number" name="soldado_id" id="id"
                  onChange={handleChange} value={form.soldado_id}/>
                </div>
              <div>
                <label htmlFor="cantidad">Id batallón:</label><br></br>
                <input type="number" name="batallon_id" id="cantidad"
                onChange={handleChange} value={form.batallon_id}/>
              </div>
            </div>

              <input type="submit" value="Enviar" className="cien top-10"/>
            </div>
          </form>
          <p className='top'>Consola:</p>
          <div className='consola cien'>
            {
              consola
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaSoldados