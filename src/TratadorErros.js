
import PubSub from 'pubsub-js'

class TratadorErros {
    publicaErros(err){
        // console.log(err )
        for(var i=-0; i<err.errors.length; i++){
            var erro = err.errors[i]
            console.log(erro)
            PubSub.publish('erro-validacao', erro )
        }
    }
}

export default TratadorErros