function CambioEncargado({encargado}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b>Id:</b> {encargado.cambioencargado_id}</li>
            <li><b>Id encargado:</b> {encargado.encargado_id}</li>
            <li><b>Id soldado:</b> {encargado.cambioencargado_soldado_id}</li>
            <li><b>Estado:</b> {encargado.cambioencargado_estado}</li>
            <li><b>Fecha:</b> {encargado.cambioencargado_fecha.substring(0, 10)}</li>

          </ul>
          
      </div>
    </>
  )
}

export default CambioEncargado