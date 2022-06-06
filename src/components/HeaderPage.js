import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { LivretPage} from '../pages/LivretPage'
import { ArbrePage} from '../pages/ArbrePage'
import { AlbumPage} from '../pages/AlbumPage'


export class HeaderPage extends React.Component {
    render() {
        return (
            <div className="">
                <div className="mb-5 container-fluid">
                    <nav id="MyNavBarId" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <button id="NavBarButton" className="navbar-toggler" data-toggle="collapse" data-target="#NavBarCollaps" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="" className="navbar-toggler-icon"></span>
                    </button>
                    <div id="NavBarCollaps" className="collapse navbar-collapse justify-content-between">
                        <p><Link to={'/'} className="navbar-brand" data-toggle="collapse" data-target= ".navbar-collapse.show"> Afficher le Livret de Famille </Link></p>
                        <p><Link to={'/arbre'} className="navbar-brand" data-toggle="collapse" data-target= ".navbar-collapse.show"> Afficher l'Arbre de la Famille </Link></p>
                        <p><Link to={'/album'} className="navbar-brand" data-toggle="collapse" data-target= ".navbar-collapse.show"> Afficher l'album de la Famille </Link></p>
                    </div>
                    </nav>
                </div>
                <hr />
                <div className="container mt-5 mb-5" id="mainId">
                    <Routes>
                        <Route exact path="/" element={<LivretPage/>} />
                        <Route path="/arbre" element={<ArbrePage myDiagramDivId="myDiagramDiv"/>} />
                        <Route path="/album" element={<AlbumPage/>} />
                    </Routes>
                </div>
            </div>
        );
    }
}