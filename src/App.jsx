import './App.css'
import Navegacao from './components/Navegacao/Navegacao'
import Atracao from './components/Atracao/Atracao'

function App() {
  let componetes = [];
  for (let i = 0; i <= 2; i++) {
    componetes.push(<Atracao key={i} />)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className="ctn-atracoes">
        {componetes}
      </div>
    </>
  )
}

export default App