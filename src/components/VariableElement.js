import React,{Component} from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class VariableElement extends Component{

    constructor(){
        super()
        this.state={
            mark : [30,40,50,80]
        }
    }


    render(){
       return(
           this.state.mark[1]>33?
           (
          <p>You have passed!!!</p>
           ) :
           (
            <p>You have failed!!!</p>
           )

       )

    }
}

export default VariableElement