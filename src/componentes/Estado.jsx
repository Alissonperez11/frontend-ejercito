function Estado({estado}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b>Id:</b> {estado.estadoinstrumento_id}</li>
            <li><b>Id instrumento:</b> {estado.instrumentos_id}</li>
            <li><b>Id misión:</b> {estado.mision_id}</li>
            <li><b>Instrumentos usados:</b> {estado.estadoinstrumento_usados}</li>
            <li><b>Instrumentos dañados:</b> {estado.estadoinstrumento_danados}</li>
          </ul>
      </div>
    </>
  )
}

export default Estado