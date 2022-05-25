import React, { useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Form.css";

const FormPublish = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      area: "",
      precio: "",
      contacto: "",
      latitud: "",
      longitud: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Escribe un lugar"),
      area: Yup.number().required("El área es un valor requerido"),
      precio: Yup.number().required("El precio es un valor requerido"),
      contacto: Yup.string().required("El contacto es un valor requerido"),
      latitud: Yup.number().required("La latitud es un valor requerido"),
      longitud: Yup.number().required("La longitud es un valor requerido"),
    }),
    onSubmit: (values) => {
      const token = localStorage.getItem("token");
      axios
        .post(`https://busca-terrenos.herokuapp.com/api/terrenos`, values, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          navigate("/resultados?place=" + values.name + "&area=" + values.area);
        });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="nkn-form">
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <label className="nkn-label" htmlFor="">
              Lugar
            </label>
            <input
              className="nkn-input"
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="nkn-error-message">{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <label className="nkn-label" htmlFor="">
              Área
            </label>
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
            ) : null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <label className="nkn-label" htmlFor="">
              Precio por m2($)
            </label>
            <input
              className="nkn-input"
              type="text"
              name="precio"
              id="precio"
              onChange={formik.handleChange}
              value={formik.values.precio}
            />
            {formik.touched.precio && formik.errors.precio ? (
              <div className="nkn-error-message">{formik.errors.precio}</div>
            ) : null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <label className="nkn-label" htmlFor="">
              Contacto
            </label>
            <input
              className="nkn-input"
              type="text"
              name="contacto"
              id="contacto"
              onChange={formik.handleChange}
              value={formik.values.contacto}
            />
            {formik.touched.contacto && formik.errors.contacto ? (
              <div className="nkn-error-message">{formik.errors.contacto}</div>
            ) : null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s6">
            <label className="nkn-label" htmlFor="">
              Longitud
            </label>
            <input
              className="nkn-input"
              type="text"
              name="longitud"
              id="longitud"
              onChange={formik.handleChange}
              value={formik.values.longitud}
            />
            {formik.touched.longitud && formik.errors.longitud ? (
              <div className="nkn-error-message">{formik.errors.longitud}</div>
            ) : null}
          </div>
          <div className="nkn-col-s6">
            <label className="nkn-label" htmlFor="">
              Latitud
            </label>
            <input
              className="nkn-input"
              type="text"
              name="latitud"
              id="latitud"
              onChange={formik.handleChange}
              value={formik.values.latitud}
            />
            {formik.touched.latitud && formik.errors.latitud ? (
              <div className="nkn-error-message">{formik.errors.latitud}</div>
            ) : null}
          </div>
        </div>
        <div className="nkn-row-padding">
          <div className="nkn-col-s12">
            <input type="submit" value="Publicar" className="nkn-button" />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPublish;
