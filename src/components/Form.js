import React, { Component } from 'react'

 class Form extends Component {

    constructor(){
        super()
        this.state ={
            name : " ",
        }
    }
    onChangeHandler=(event)=>{
        var newName = event.target.value;
        this.setState({name: newName});
    }


    render() {
        return (
            <div>
                <form>
                    <p>Form Input</p>
                    <p>{this.state.name}</p>
                    <input type="text" onChange={this.onChangeHandler} placeholder="Enter your name"/>
                    <input type="submit"/>
                </form>
               
            </div>
        )
    }
}
export default Form