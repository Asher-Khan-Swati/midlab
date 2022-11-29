import React, { Component } from 'react';

class Asher extends Component{
 
    state={
        name:"Khan Swati",
        reg_no:"044"
        
    
    };
    render(){

    return <h1 >Asher  {this.state.name}<br></br>Sp21-BSE- {this.state.reg_no}</h1>

     
    }

 
}
export default Asher;