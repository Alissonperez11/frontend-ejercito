import { Route } from 'wouter'
import './App.css'
import Navegacion from './componentes/Navegacion'
import FaltasDisciplinarias from './paginas/FaltasDisciplinarias'
import Instrumentos from './paginas/Instrumentos'
import PeticionAscenso from './paginas/PeticionAscenso'
import Soldados from './paginas/Soldados'

function App() {

  return (
    <div >
      <Navegacion/>
      <div className='App'>
      <Route path='/' component={Instrumentos}/>
      <Route path='/soldados' component={Soldados}/>
      <Route path='/faltas-disciplinarias' component={FaltasDisciplinarias}/>
      <Route path='/peticiones-ascenso' component={PeticionAscenso}/>
      </div>
    </div>
  )
}

export default App
