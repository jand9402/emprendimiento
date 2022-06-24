import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import relojes_es from "../../assets/relojes_es.png"
import imagen_dos_es from "../../assets/imagen_dos_es.png"
import relojes_en from "../../assets/relojes_en.png"
import imagen_dos_en from "../../assets/imagen_dos_en.png"
import gif from "../../assets/gif.gif"


function Home() {
    return (

        <>
            <div className="container">
                <div className="row row_home">
                    <div className="col-sm-6 col_text_home">
                        <h5 className="satisfecho mb-3">- NO PAGAS HASTA ESTAR SATISFECHO</h5>
                        <h1 className="titulo_home mb-3">Desarrollamos tu página web de forma eficiente, agradable, económica y en tiempo récord.</h1>
                        <h5 className="satisfecho">ES TU TURNO DE ENTRAR A LA ERA DIGITAL</h5>
                        <form>
                        <a className="test_btn">
                            <span className="span0 span1"></span>
                            <span className="span0 span2"></span>
                            <span className="span0 span3"></span>
                            <span className="span0 span4"></span>
                            Cotiza con nosotros
                        </a>
                        </form>
                    </div>
                    <div className="col-sm-6 con_img_home">
                        <img className="img_home" src={relojes_es} alt="imagen"/>
                    </div>
                </div>
                {/* <div className="row row_home2">
                    <div className="col-sm-12 col_2 ">
                        <img className="imagen_2" src={imagen_dos_es} alt="imagen"/>
                    </div>
                </div> */}
                <div className="row row_home3">
                    <div className="col-sm-6 col_3 ">
                        <img className="img_3" src={gif} alt="imagen"/>
                    </div>
                    <div className="col-sm-6 col_3 ">
                    <h5 className="mas_personas">LLEGA A MÁS PERSONAS</h5>
                        <h1 className="titulo_home mb-3">Hubo 1.66 mil millones de compradores digitales en todo el mundo en 2017 </h1>
                        <h5 className="numero_aumento">¡Y EL NÚMERO SIGUE EN AUMENTO!</h5>
                    </div>
                </div>
                <div className="row row_home4">
                    <div className="col-sm-12 col_4">
                        <h1 className="titulo_home_4 mt-4">¡Es muy fácil!</h1>
                        <h1 className="titulo_paso mt-4">Paso 1</h1>
                        <h3 className="paso_descripcion">Cuéntanos que necesitas (si no estas muy seguro te asesoramos sin ningún costo)</h3>
                        <h1 className="titulo_paso mt-4">Paso 2</h1>
                        <h3 className="paso_descripcion">Te presentamos una propuesta en un lapso de una semana </h3>
                        <h1 className="titulo_paso mt-4">Paso 3</h1>
                        <h3 className="paso_descripcion">Si la propuesta te gusta pagas el valor acordado, si no te gusta puedes sugerir cambios a tu gusto o simplemente no tomar el servicio y no perderás absolutamente nada </h3>
                        {/* <div className="div_boton_home mt-5">
                            <button className="btn btn_home_2">Cotiza con nosotros</button>
                        </div> */}
                        <form>
                        <a className="test_btn">
                            <span className="span0 span1"></span>
                            <span className="span0 span2"></span>
                            <span className="span0 span3"></span>
                            <span className="span0 span4"></span>
                            Cotiza con nosotros
                        </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home