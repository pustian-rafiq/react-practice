
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
const alertEvent=(a)=>{
    alert(a)
}
const Arrow=()=>{
    return(
   <button className="btn btn-outline-primary" onClick={alertEvent.bind(this,'This button is from arrow function')}>Click Arrow</button>

    );
}

export default Arrow;