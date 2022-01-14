function Reporte({reporte}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b>Id:</b> {reporte.reporteinstrumento_id}</li>
            <li><b>Id estado instrumento</b> {reporte.estadoinstrumento_id}</li>
            <li><b>Fecha:</b> {reporte.reporteinstrumento_fecha.substring(0, 10)}</li>
            <li><b>Instrumentos usados:</b> {reporte.reporteinstrumento_estado}</li>
            <li><b>Cantidad de instrumentos:</b> {reporte.reporteinstrumento_cantidad}</li>
          </ul>
      </div>
    </>
  )
}

export default Reporte