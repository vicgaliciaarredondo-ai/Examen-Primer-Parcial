import './App.css';

function Card({ titulo, valor, descripcion }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <h2>{valor}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contenedor-tarjetas">
          <Card
            titulo="Tarjeta 1"
            valor="Victor"
            descripcion="Integrante 1"
          />
          <Card
            titulo="Tarjeta 2"
            valor="Ulises"
            descripcion="Integrante 2"
          />
          <Card
            titulo="Tarjeta 3"
            valor="Galicia"
            descripcion="Integrante 3"
          />
          <Card
            titulo="Tarjeta 4"
            valor="Arredondo"
            descripcion="Integrante 4"
          />
        </div>

        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre completo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Victor Ulises Galicia Arredondo</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;