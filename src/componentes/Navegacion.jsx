import { Link } from "wouter"
import './Navegacion.css'

function Navegacion() {

  return (
    <>
    <header className="header">
      <p className="ali">Alisson Pérez</p>
      <nav>
        <ul className="ul">
          <li className="li">
            <Link href="/" className="active">Instrumentos</Link>
          </li>
          <li className="li">
            <Link href="/soldados" className="active">Soldados</Link>
          </li>
          <li className="li">
            <Link href="/faltas-disciplinarias" className="active">Faltas Disciplinarias</Link>
          </li>
          <li className="li">
            <Link href="/peticiones-ascenso" className="active">Peticiones Ascenso</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navegacion