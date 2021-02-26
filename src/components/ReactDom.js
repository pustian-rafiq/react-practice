import React, { Component } from 'react'
import ReactDOM from 'react-dom'

 class ReactDom extends Component {
   
// uses of render and hydrate method 
    nameChange(){
        var container = document.getElementById('id1');
        var element = <h1>I am from Rnder methtod</h1>
        var cal =function(){
            alert('Well done! i am call back method');
        }
        ReactDOM.render(element, container,cal);
    }
    render() {
        return (
            <div>
                <button onClick={this.nameChange}>Chnage Name</button>
                <p id="id1">My name is Rafiqul Islam</p>
                
            </div>
        )
    }
}
export default ReactDom