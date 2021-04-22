import '../../App.css';

import React from 'react';

import cv from '../Docs/CV.pdf';
import logo from '../image/me.png';
import social from '../image/Social.png';
/*import linkedin from '../image/inded.png';*/

const Acceuil = ()  =>{
    return (
    <div className="container info wrapper">
        <div className="row main jumbotron">
            <div className="col-md-6 ">
                <div className="card" style={{width: '25rem'}}>
                    <img className="img-fluid rounded  img" src={logo} alt="Responsive images"/>
                    <div className="card-body">
                        <h2 className="card-title">Mohamed Abdoulaye Cherif Diallo</h2>
                        <h2>Développeur Web</h2>
                        <a href={cv} download={cv}>
                            <button style={{height: '2.7rem'}} className="btn btn-outline-dark">Télécharger CV</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="card" style={{width: '25rem'}}>
                    <img className="img-fluid rounded " src={social} alt="Responsive images"/>
                    <div className="card-body">
                        <p className="card-text">Étudiant en Master 1 Informatique à
                            l’université de Bordeaux à la recherche d’un stage/Alternance</p>
                        <h5>Adresse: 75 Avenue de Saige, 33600 Pessac </h5>
                        <h5>Tel: 0605540218</h5>
                        <h5>E-mail: mcherifdiallo96@gmail.com </h5>
                        {/*<h5>LinkedIn </h5>
                        <img className="img-fluid rounded  img" src={linkedin} alt="Responsive images"/>*/}
                        <h5>Date de naissance: 12 Septembre 1996 à Dalaba </h5><br />
                        <i><strong>Permis B.</strong></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Acceuil
