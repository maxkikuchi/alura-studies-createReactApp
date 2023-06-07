import React from "react";
import './style.scss'

class ButtonProd extends React.Component{
    render() {
        return(
            <button className="button">
                Button
            </button>
        )
    }
} 

//Exemplo 1
class ButtonTeste1 extends React.Component{
    render() {
        const backgroundColor = 'blue';
        const styles = {
            backgroundColor
        }        

        return(
            <button style={styles}>
                Button
            </button>
        )
    }
}

//Exemplo 2
class ButtonTeste2 extends React.Component{
    render() {
        
        return(
            <button style={{color: "orange"}}>
                Button
            </button>
        )
    }
} 

//Exemplo 3
class ButtonTeste3 extends React.Component{
    render() {
        const estaAtivo = false;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }        
                
        return(
            <button style={styles}>
                Button
            </button>
        )
    }
}

export default ButtonProd