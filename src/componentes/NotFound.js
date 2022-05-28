import { useNavigate } from 'react-router-dom';
import '../style/ModalLogin.css';

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="nkn-modal-container nkn-open">
        <div id="modal-small" className="nkn-modal nkn-medium">
            <div className="nkn-modal-content nkn-vertical-align">
                <div>
                <p className='nkn-m-large'>Terrenos no encontrados para este lugar</p>
                <button type="button" className="nkn-button" onClick={()=>{navigate('/buscar')}}>Volver a buscar</button>
                </div>

            </div>
        </div>
      </div>

  )
}

export default NotFound;
