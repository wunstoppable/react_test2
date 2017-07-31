import React from 'react'

/**
 * @description
 * @author
 */

class myCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card">
                <img src={this.props.link}/>
                <div className="article">
                    <p>Model</p>
                </div>
            </div>
        )
    }
}

export default myCard;