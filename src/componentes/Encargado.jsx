function Encargado({encargado}) {

  return (
    <>
      <div className="cuadro">
          <ul>
            <li><b>Id:</b> {encargado.encargado_id}</li>
            <li><b>Id batallón:</b> {encargado.batallon_id}</li>
            <li><b>Id soldado:</b> {encargado.soldado_id}</li>
          </ul>
      </div>
    </>
  )
}

export default Encargado