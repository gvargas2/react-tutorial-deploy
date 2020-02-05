import React, { Component } from 'react'

// Creo componente de clase, NO SIMPLE
class Form extends Component {

    constructor(props) {
        super(props);

            this.initialState = {
                name: '',
                job: ''
            }

            this.state = this.initialState;
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({
            [name] : value,
        })
    }

    // Nuevo metodo para submit 
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const  {name,job} = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label for="job">Trabajo</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
            
            <button type="submit">
                Submit
            </button>
            
            </form>
        )
    }

}

export default Form