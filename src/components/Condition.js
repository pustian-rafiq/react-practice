import React,{Component} from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Condition extends Component{

    constructor(){
        super()
        this.state={
            mark : [30,40,50,80]
        }
    }


    render(){
        if (this.state.mark[3]>33) {
            return(
                <p>You have passed!!!</p>
            )
        }else{
            return(
                <p>You have failed!!!</p>
            )
        }

    }
}

export default Condition