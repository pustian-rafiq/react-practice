import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super()
        this.state = {
            show: " ",
            auto: " "
        }
    }
    onChangeHandler=(event)=>{
        var selectedValue = event.target.value;
        this.setState({show:selectedValue, auto: selectedValue})
    }
    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>Dhaka</option>
                    <option>Khulna</option>
                    <option>Barisal</option>
                    <option>Sylhet</option>
                </select>
            </div>
        );
    }
}

export default Select;