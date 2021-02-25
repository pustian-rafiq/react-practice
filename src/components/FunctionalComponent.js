
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function FunctionalComponent(){
    function clickEvent(){
        alert('Button is clicked from functional Component')
    }
    return(
       <div>
            <button className="btn btn-danger m-4" onClick={clickEvent}>Click me</button>
           <h1>Hello, I am from Functional Component.</h1>
       </div>
    );
}

export default FunctionalComponent