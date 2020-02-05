// SI OCUPO CLASS COMPONENTS
//import React, { Component } from "react"

import React from 'react'

//CLASS COMPONENT 
/*
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
*/ 
// FIN CLASS COMPONENT

// SIMPLE COMPONENT
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Trabajo</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    /*
    return (

        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>

    )
    */

   const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>

        <td>
            <button  onClick={() => props.removeCharacter(index)}>
                DELETE
            </button>
        </td>
    
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


/*
class Table extends Component {
    render() {

        // const { characterData } = this.props

        return (
           <table>
                <TableHeader />
                <TableBody characterData={this.props.characterData}/>
            </table> 
        )
    }
}
*/


const Table = (props) => {

    const { characterData, 
            removeCharacter 
          } = props;

    return (

        <table>
            <TableHeader />
            <TableBody 
                characterData={characterData} 
                removeCharacter={removeCharacter} 
            />
        </table> 
    )
}

export default Table;