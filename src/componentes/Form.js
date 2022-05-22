import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import '../style/Form.css'

const Form = () => {
  const formik = useFormik({
      initialValues: { place: '', area: ''},
      validationSchema: Yup.object({
        place: Yup.string()
          .required('Selecciona un lugar'),
        area: Yup.string()
          .required('El área es un valor requerido')
      }),
      onSubmit: values => {
          console.log(values);
      }
  })
  return <>
    <form onSubmit={formik.handleSubmit} className='nkn-form'>
        <div className="nkn-row-padding">
            <div className="nkn-col-s12">
              <label className="nkn-label" htmlFor="">Lugar</label>
              <input
                className="nkn-input"
                type="text"
                name="place"
                id="place"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.place}
              />
              {formik.touched.place && formik.errors.place ? (
                <div className="nkn-error-message">{formik.errors.place}</div>
              ): null}
            </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <label className="nkn-label" htmlFor="">Área</label>
            <input
                className="nkn-input"
                type="text"
                name="area"
                id="area"
                onChange={formik.handleChange}
                value={formik.values.area}
            />
            {formik.touched.area && formik.errors.area ? (
                <div className="nkn-error-message">{formik.errors.area}</div>
            ): null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <input type="submit" value="Buscar" className="nkn-button"/>
          </div>
        </div>
    </form>
  </>
}

export default Form;
