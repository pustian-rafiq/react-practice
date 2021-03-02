import React, { Component } from 'react';

class List extends Component {

    childList=(data)=>{
        return <option>{data+10}</option>
    }
    render() {
        const city = [1,2,3,4,5,6,7,8,9,10]
        const dataItems = city.map(this.childList)
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default List;