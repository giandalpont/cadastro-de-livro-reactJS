import React, { Component } from 'react'

import Menu from './componentes/Menu'
import './css/pure-min.css'
import './css/side-menu.css'

class  App extends Component {

    constructor(){
        super()
        this.state = {
            list : [{ 
                name: 'Gian',
                email: 'giandalpont@gmail.com',
                password: '123'
            }]
        }
    }

    render(){
        return (
            <div id="layout">
                
                <Menu />

                <div id="main">
                    <div className="header">
                        <h1>Books in ReactJS</h1>
                        <h2>developed in reactJS consuming an API</h2>
                    </div>
                    <div className="content" id="content">
                        <h2 className="content-subhead">Author Registration</h2>
                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned">
                                <div className="pure-control-group">
                                    <label htmlFor="nome">Name</label> 
                                    <input id="nome" type="text" name="nome" value=""  />                  
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="email">E-mail</label> 
                                    <input id="email" type="email" name="email" value=""  />                  
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="senha">Password</label> 
                                    <input id="senha" type="password" name="senha" />                                      
                                </div>
                                <div className="pure-control-group">                                  
                                    <label></label> 
                                    <button type="submit" className="pure-button pure-button-primary">Save</button>                                    
                                </div>
                            </form>             
                        </div>  
                        <div>            
                            <table className="pure-table">
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.state.list.map((item)=>{
                                        return(
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> 
                        </div>             
                    </div>
                </div>
            </div>
        )
    }
}

export default App
