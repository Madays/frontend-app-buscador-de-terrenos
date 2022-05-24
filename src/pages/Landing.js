
import ModalLogin from '../componentes/ModalLogin';
import '../style/Landing.css'

export default function Landing() {
  return (
    <div className="page-search-form">
      <div className='landing'>
        <h1>Busca terrenos</h1>
        <p className='nkn-my-large'>Esta aplicación web te permite buscar terrenos en el lugar y tamaño que quieras</p>
        <button className="nkn-button login" data-nkn-role="open-modal" data-nkn-target="modal-medium">Ingresar</button>
      </div>
      <ModalLogin />
    </div>
  );
}
