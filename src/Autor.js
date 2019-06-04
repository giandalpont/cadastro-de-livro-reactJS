import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import PubSub from 'pubsub-js'
import InputCustomizado from './componentes/InputCunstomizado'
import TratadorErros from './TratadorErros' 

class FormularioAutor extends Component {

    constructor(porps){
        super()
        this.state = {
            nome: '',
            email: '',
            senha: '',
        }
        this.sendForm = this.sendForm.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setSenha = this.setSenha.bind(this)
    }

    sendForm(event){
        event.preventDefault()
        
        $.ajax({
            url: 'http://cdc-react.herokuapp.com/api/autores',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success: function(send){
                // Disparar um aviso geral de toggleNew disponivel
                PubSub.publish('update-list-author', send)
                //this.props.callbackToggle(send)
                this.setState({nome:'',email:'',senha:''})
                // console.log('Enviado com sucesso')
            }.bind(this),
            error: (send)=>{
                if(send.status == 400){
                    // Recuperar quais foram os erros
                    // Exibir a mensagem de error no campo 
                    new TratadorErros().publicaErros( send.responseJSON ) 
                }
                console.log('Error')
            },
            beforeSend: ()=>{
                PubSub.publish('limpa-erros',{})
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

    render () {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">

                    <InputCustomizado  id ="nome" type="text" name="nome" label="Nome"  value={this.state.nome} onChange={this.setNome} />
                    <InputCustomizado  id ="email" type="email" name="email" label="E-mail"  value={this.state.email} onChange={this.setEmail} />
                    <InputCustomizado  id ="senha" type="password" name="senha" label="Senha"  value={this.state.senha} onChange={this.setSenha} />
                
                    <div className="pure-control-group">                                  
                        <label></label> 
                        <button type="submit" className="pure-button pure-button-primary">Save</button>                                    
                    </div>

                </form>             
            </div>  
        )
    }

}

class TabelaAutores extends Component {

    render (){
        return (
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.list.map((item)=>{
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
        )
    }

}

class Autorbox extends Component {

    constructor(props){
        super()
        this.state = {
            list: [],
        }
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

        PubSub.subscribe('update-list-author', function(newTop, send){
            this.setState({ list:send })
        }.bind(this))

    }

    render (){
        return(
            <Fragment>
                <FormularioAutor />
                <TabelaAutores list={this.state.list} />
            </Fragment>
        )
    }

}

export default Autorbox