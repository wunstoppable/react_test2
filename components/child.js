/**
 * Created by WuTong on 2017/7/19.
 */
import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.info(e.target.value);
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
            </div>
        )
    }
}
// function Child(props){
//     return <div>test {props.info}</div>;
// }

// const Child = (props) => <div>Child</div>
export default Child;