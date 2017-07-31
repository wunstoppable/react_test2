/**
 * Created by WuTong on 2017/7/19.
 */
import React from 'react';
/**
 * @description
 */
class Login extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <label style={{display: 'block'}}>Login<input type="text"/></label>

                <label>Password<input type="password"/></label>
            </div>
        )
    }
}

export default Login;