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
            <div className="swiper-slide">
                <div className="carousel-item">
                    <img src={this.props.link} draggable='false'/>
                    <div className="article">
                        <p>Model</p>
                        <p>Model again</p>
                        <p>Model hahaha</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default myCard;