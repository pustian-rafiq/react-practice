import React,{Component} from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StateComponent extends Component{
  constructor(){
      super()
      this.state={
          nam : "Rana",
          name : ["Rafiqul Islam","Moslem Ali","Aleya Khatun"],
          age   : 24,
          information:{
              village   : "Brozopatulia",
              post      : "Bagbati",
              thana     : "Kaligonj",
              district  : "Satkhira"
          }
      }
  }
  nameChange(a){
      this.setState({nam: "Siddiqa"})
  }

    render(){
        return <div className="container">
    {/* <p className="bg-primary">My personal Information</p>
    <button onClick={this.nameChange.bind(this,"Kamrunnahar")}>Change my name</button>
            <span className=" text-center text-danger p-5">My Name is {this.state.nam}</span>
            <span className="  text-center text-danger p-5">My Age is {this.state.age}</span>
            <span className="  text-center text-danger p-5">My Father Name is {this.state.name[1]}</span>
            <span className="  text-center text-danger p-5">My Mother Name is {this.state.name[2]}</span>
            <br></br>
         <h1 className="bg-success">Permanent Address</h1>
            <span className="  text-center text-danger p-5">My District is {this.state.information.village}</span>
            <span className=" text-center text-danger p-5">My District is {this.state.information.post}</span>
            <span className=" text-center text-danger p-5">My District is {this.state.information.thana}</span>
            <span className="  text-center text-danger p-5">My District is {this.state.information.district}</span> */}
        </div>
    }
}

export default StateComponent