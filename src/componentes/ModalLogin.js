import axios from "axios";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import closeIcon from '../imagenes/close.svg';
import '../style/ModalLogin.css';

function ModalLogin() {


  const formik = useFormik({
    initialValues: { username: '', password: ''},
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username es un campo requerido'),
      password: Yup.string()
        .required('Password es un campo requerido')
    }),
    onSubmit: values => {
        console.log(values);
        const url = `http://localhost:4000/api/login`;
        axios.post(url, values).then((res) => {
          const loginData = res.data;
          console.log(loginData)
        });
    }
  })
  return (
    <div className="nkn-modal-container">
        <div id="modal-medium" className="nkn-modal nkn-medium">
            <div className="nkn-modal-heading">
                Iniciar Sesion
                <div className="nkn-icon-close" data-nkn-role="close-modal">
                  <img src={closeIcon} className="nkn-icon" alt='close icon'/>
                </div>
            </div>
            <div className="nkn-modal-content nkn-vertical-align">
                <form onSubmit={formik.handleSubmit} className='nkn-form'>
                    <div className="nkn-row-padding">
                        <div className="nkn-col-s12">
                            <label className="nkn-label" htmlFor="username">Username:</label>
                            <input
                              className="nkn-input"
                              id="username"
                              name='username'
                              type="text"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.username}
                            />
                            {formik.touched.username && formik.errors.username ? (
                              <div className="nkn-error-message">{formik.errors.username}</div>
                            ): null}
                        </div>
                    </div>
                    <div className="nkn-row-padding">
                        <div className="nkn-col-s12">
                            <label className="nkn-label" htmlFor="password">Password:</label>
                            <input
                              className="nkn-input"
                              id="password"
                              type="password"
                              name="password"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                              <div className="nkn-error-message">{formik.errors.password}</div>
                            ): null}
                        </div>
                    </div>
                    <div className="nkn-row-padding">
                        <div className="nkn-col-s12 nkn-center">
                          <input type="submit" value='Login' className="nkn-button"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>

  )
}

export default ModalLogin;
