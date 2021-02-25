import React,{Component} from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ClassComponent extends Component{

    clickEvent=(a)=>{
        alert(a)
    }
    render(){
      return  <div>
            <button className="btn btn-danger m-4" onClick={this.clickEvent.bind(this,'this arrow button is from Class Component')}>Click me</button>
            <h1>Hello, I am from Class Component.</h1>
     </div>
    }

}
export default ClassComponent