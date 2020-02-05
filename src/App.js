import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    
    // Creando State Object
    // The object will contain properties for everything you want to store in the state
    state = {
        characters: [],
    }
    
     // Metodo para borrar elementos
     removeCharacter = index => {
        const { characters } = this.state
        
        this.setState({
            characters: characters.filter(function(character,i) {
                // Devuelve nuevo array con todos los elementos, excepto con el seleccionado (el a eliminar)
                return i !== index;
            })
        })
    }

    // Para añadir elementos creamos metodo
    handleSubmit = character => {
        this.setState( { characters : [ ...this.state.characters,character ] })
    }

    render() {

        const { characters } = this.state

        // Array de data que queremos mostrar
        /*
        const characters = [{
                nombre: 'Charlie',
                trabajo: 'Janitor',
            },
            {
                nombre: 'Mac',
                trabajo: 'Bouncer',
            },
            {
                nombre: 'Dee',
                trabajo: 'Aspring actress',
            },
            {
                nombre: 'Dennis',
                trabajo: 'Bartender',
            },
        ]
        */

       

        return (

            <div className = "container" >
                <h1>Tutorial React</h1>
                <Table 
                    characterData = {characters} 
                    removeCharacter = {this.removeCharacter} 
                />
                <h3>AGREGAR</h3>
                <Form 
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default App