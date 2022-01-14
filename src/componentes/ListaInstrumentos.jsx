import { useState, useEffect } from 'react'
import { recargar } from '../funciones'
import actualizarInstrumento from '../servicios/actualizarInstrumento'
import leerEstadoInstrumentos from '../servicios/leerEstadoInstrumento'
import leerInstrumentos from '../servicios/leerInstrumentos'
import leerReportes from '../servicios/leerReportes'
import Estado from './Estado'
import Instrumento from './Instrumento'
import Reporte from './Reporte'

const datosIniciales = {
  instrumentos_id: '',
  instrumentos_cantidad: '',
  opcion: ''
}

function ListaInstrumentos() {
  const [data, setData] = useState([])
  const [estado, setEstado] = useState([])
  const [reporte, setReporte] = useState([])
  const [consola, setConsola] = useState('')

  const [form, setForm] = useState(datosIniciales)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.instrumentos_id || !form.instrumentos_cantidad || !form.opcion) {
      alert('Datos incompletos')
      return
    }else{
      actualizacion(form)
    }
  }

  const actualizacion = async (body) => {
    let {instrumentos_id, instrumentos_cantidad, opcion} = body
    const resultado = await actualizarInstrumento(instrumentos_id,{instrumentos_id, instrumentos_cantidad, opcion})
    setConsola(resultado.message)
    recargar()
  }

  useEffect(function(){
    leerInstrumentos().then(instrumentos => setData(instrumentos))
    leerEstadoInstrumentos().then(estado => setEstado(estado))
    leerReportes().then(reporte => setReporte(reporte))
  }, [])

  return (
    <>
      <div className='gridInstrumentos'>
        <div>
          <h3>Lista Instrumentos</h3>
          {
            data.map((instrumento) => <Instrumento key={instrumento.instrumentos_id} instrumento={instrumento}/>)
          }
        </div>
        <div>
          <h3>Lista EstadoInstrumentos</h3>
          {
            estado.map((estado) => <Estado key={estado.estadoinstrumento_id} estado={estado}/>)
          }
        </div>
        <div>
          <h3>Lista ReporteInstrumentos</h3>
          {
            reporte.map((reporte) => <Reporte key={reporte.reporteinstrumento_id} reporte={reporte}/>)
          }
        </div>
        <div>
          <h3>Actualizar Instrumentos</h3>
          <form onSubmit={handleSubmit} className='top'>
            <div className='act-es'>
              <div>
              <label htmlFor="id">Id instrumento:</label> <br></br>
              <input type="number" name="instrumentos_id" id="id"
              onChange={handleChange} value={form.instrumentos_id}/>
           </div>
           <div>
              <label htmlFor="cantidad">Cantidad:</label><br></br>
              <input type="number" name="instrumentos_cantidad" id="cantidad"
              onChange={handleChange} value={form.instrumentos_cantidad}/>
              </div>
            </div>

            <div className='top-10 cien'>
              <label>Seleccionar:</label>
              <div onChange={handleChange}>
                <div>
                <input type="radio" value="SUMA" name="opcion" /> Añadiendo nuevos elementos
                </div>
                <div>
                <input type="radio" value="RESTA" name="opcion" /> Reportando instrumentos dañados
                </div>
              </div>
            </div>
              <input type="submit" value="Enviar" className="top-10 cien"/>
          </form>
          <p className='top'>CONSOLA</p>
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

export default ListaInstrumentos