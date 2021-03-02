import React, { Component } from 'react'

 class Form extends Component {

    constructor(){
        super()
        this.state ={
            fname : " ",
            lname : " ",
            emial : " ",
            distirct : " ",
            phn : " ",
        }
    }
    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]: inputValue});


        if(inputName === "fname"){
            var fname = /^[a-zA-Z-' ]*$/;
            if(!fname.test(inputValue)){
                 this.setState({fname: "First Name is not valid"});
            }

        }
    }
    submitHandler=()=>{
        alert(this.state.fname);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p>Form Input</p>
                    <p>First Name: {this.state.fname}</p><br></br>
                    <p>Last Name: {this.state.lname}</p><br></br>
                    <p>Email: {this.state.email}</p><br></br>
                    <p>District: {this.state.district}</p><br></br>
                    <p>Phone: {this.state.phn}</p><br></br>
                    
                    <input name="fname" type="text" onChange={this.onChangeHandler} placeholder="Enter your first name"/><br></br>
                    <input name="lname" type="text" onChange={this.onChangeHandler} placeholder="Enter your last name"/><br></br>
                    <input name="email" type="email" onChange={this.onChangeHandler} placeholder="Enter your email"/><br></br>
                    <input name="district" type="text" onChange={this.onChangeHandler} placeholder="Enter your district"/><br></br>
                    <input name="phn" type="text" onChange={this.onChangeHandler} placeholder="Enter your phone"/><br></br>
                    <input type="submit"/>
                </form>
               
            </div>
        )
    }
}
export default Form