import React, { Component } from 'react'

import Menu from './componentes/Menu'

import { FormularioAutor, TabelaAutores } from './Autor';

import './css/pure-min.css'
import './css/side-menu.css'

class  App extends Component {

    render(){
        return (
            <div id="layout">
                
                <Menu />

                <div id="main">
                    <div className="header">
                        <h1>Books in ReactJS</h1>
                        <h2>developed in reactJS consuming an API</h2>
                        <h2>developed in reactJS consuming an API</h2>
                    </div>
                    <div className="content" id="content">
                        <h2 className="content-subhead">Author Registration</h2>

                        <FormularioAutor />

                        <TabelaAutores />
                                    
                    </div>
                </div>
            </div>
        )
    }
}

export default App
