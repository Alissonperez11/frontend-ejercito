function Soldado({soldado}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b>Id:</b> {soldado.soldado_id}</li>
            <li><b>Id rango:</b> {soldado.rango_id}</li>
            <li><b>Id batallón:</b> {soldado.batallon_id}</li>
            <li><b>Cédula</b> {soldado.soldado_cedula}</li>
            <li><b>Nombres:</b> {soldado.soldado_nombre}</li>
            <li><b>Apellidos:</b> {soldado.soldado_apellido}</li>
            <li><b>Fecha nacimiento:</b> {soldado.soldado_fechanacimiento.substring(0, 10)}</li>
            <li><b>Fecha enlistación</b> {soldado.soldado_fechaenlistacion.substring(0, 10)}</li>
            <li><b>Tatuajes:</b> {soldado.soldado_tatuaje.toString()}</li>
            <li><b>Aceptación</b> {soldado.soldado_aceptacion.toString()}</li>
          </ul>
      </div>
    </>
  )
}

export default Soldado