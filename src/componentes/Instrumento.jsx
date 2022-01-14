function Instrumento({instrumento}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b > Id:</b> {instrumento.instrumentos_id}</li>
            <li><b >Id misión:</b> {instrumento.mision_id}</li>
            <li><b >Nombre:</b> {instrumento.instrumentos_nombre}</li>
            <li><b >Cantidad:</b> {instrumento.instrumentos_cantidad}</li>
          </ul>
      </div>
    </>
  )
}

export default Instrumento