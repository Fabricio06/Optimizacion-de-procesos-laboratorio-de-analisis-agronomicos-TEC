import React from 'react';
import Menu from './Menu';
import Footer from './Footer'


const Bitacoras = () =>{
    return (
    
        <div className='Bitacora'>
        <div className='App2'>
             <div className='header'>
                <Menu/>
            </div>
        
        <div className='Main'>
            <div className='Formularios'>
            <form action='elegirForm'>
            <h2>Seleccione el tipo de formulario</h2>
            <select name="form" id="form">
                <option value="AbonoOrganico">Abono Orgánico</option>
                <option value="Bromatologico">Bromatológico</option>
                <option value="Suelos">Suelos</option>
                <option value="N">N</option>
                <option value="Foliar">Foliar</option>
                <option value="Fertilizantes">Fertilizantes</option>
                <option value="Fruta">Fruta</option>
            </select>
            <h2>Seleccione el formulario</h2>
            <select name="form" id="form">
                <option value="AbonoOrganicoL">Abono Orgánico Líquido</option>
                <option value="AbonoOrganicoS">Abono Orgánico Sólido</option>
                <option value="Bromatologico">Bromatológicos</option>
                <option value="BromatologicoQC">Bromatológicos + QC</option>
                <option value="Fertilizantes">Fertilizantes-Carbonatos</option>
                <option value="Foliar">Foliar QC + B + S + MS</option>
                <option value="Foliar2">Foliar QC + B + S</option>
                <option value="Foliar3">Foliar QC + B</option>
                <option value="Foliar4">Foliar QC + MS</option>
                <option value="Foliar5">Foliar QC</option>
                <option value="Fruta">Fruta QC + B + S</option>
                <option value="N1">N, MS 55, MS 105, FDN, FDA</option>
                <option value="N2">N, MS 55, MS 105</option>
                <option value="Suelos1">SUELOS MO + DENSIDAD APARENTE</option>
                <option value="Suelos2">SUELOS QC + CE</option>
                <option value="Suelos3">SUELOS QC + MO + TXT</option>
                <option value="Suelos4">SUELOS QC + MO</option>
                <option value="Suelos5">SUELOS QC + TXT</option>
                <option value="Suelos6">SUELOS QC</option>

            </select>
            <button type='sumbit'>Filtrar</button>
            </form>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
        </div>
        </div>

        





    );






}

export default Bitacoras;