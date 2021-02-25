import React,{Component} from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StateComponent extends Component{
  constructor(){
      super()
      this.state={
          name : "Rafiqul Islam",
          district  : "Satkhira",
          fathername : "Moslem Ali Boddi",
          mothername    : "Alyea Begum"
      }
  }

    render(){
        return <div className="container">

            <p className="bg-dark text-center text-danger p-5">My Name is {this.state.name}</p>
            <p className="bg-dark text-center text-danger p-5">My District is {this.state.district}</p>
            <p className="bg-dark text-center text-danger p-5">My Father Name is {this.state.fathername}</p>
            <p className="bg-dark text-center text-danger p-5">My Mother Name is {this.state.mothername}</p>
        </div>
    }
}

export default StateComponent