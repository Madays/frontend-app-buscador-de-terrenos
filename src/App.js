import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import ListaTerrenos from './pages/ListaTerrenos';
import BuscarTerrenos from './pages/SearchForm';
import Landing from './pages/Landing';
import PublicarTerreno from './pages/PublicarTerreno';

function App() {
  return (
    <div className="App">

      <main>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/buscar' element={<BuscarTerrenos/>}/>
                <Route path='/resultados' element={<ListaTerrenos/>}/>
                <Route path='/publicar' element={<PublicarTerreno/>}/>
            </Routes>
        </BrowserRouter>
      </main>

    </div>
  );
};

export default App;
