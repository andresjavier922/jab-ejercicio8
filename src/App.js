import './App.css';
import Provider from './contexto/Provider';
import Idioma from './Idioma';
import Pagina from './Pagina';

function App() {
  return (
    <Provider>
      <div className="banderas">
        <Idioma />
      </div>
      <div className="contenido">
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
