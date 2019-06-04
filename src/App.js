import React, { Component } from 'react'
import $ from 'jquery'
import Menu from './componentes/Menu'
import InputCustomizado from './componentes/InputCunstomizado'

import './css/pure-min.css'
import './css/side-menu.css'

class  App extends Component {

    constructor(porps){
        super()
        this.state = {
            list: [],
            nome: '',
            email: '',
            senha: '',
        }
        this.sendForm = this.sendForm.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setSenha = this.setSenha.bind(this)
    }

    componentWillMount(){
        $.ajax({
            // url: 'http://localhost:8080/api/autores',
            url: 'http://cdc-react.herokuapp.com/api/autores',
            dataType: 'json',
            limit: 6,
            success: function(resposta){
                // console.log(resposta)
                this.setState( {list:resposta} )
            }.bind(this)
        })
    }

    sendForm(event){
        event.preventDefault()
        
        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/autores',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success: (send)=>{
                this.setState({ list: send }) // Atualizando a lista
                console.log('Enviado com sucesso')
            },
            error: (send)=>{
                console.log('Error')
            }
        })

        console.log('dados sendo enviados')
    }

    setNome(event){
        this.setState({ nome: event.target.value })
    }
    setEmail(event){
        this.setState({ email: event.target.value })
    }
    setSenha(event){
        this.setState({ senha: event.target.value })
    }

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
                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">

                                <InputCustomizado  id ="nome" type="text" name="nome" label="Nome"  value={this.state.name} onChange={this.setNome} />
                                <InputCustomizado  id ="email" type="email" name="email" label="E-mail"  value={this.state.email} onChange={this.setEmail} />
                                <InputCustomizado  id ="senha" type="password" name="senha" label="Senha"  value={this.state.senha} onChange={this.setSenha} />
                               
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
                                            <tr key={item.id}>
                                                <td>{item.nome}</td>
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
