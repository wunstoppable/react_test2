import React from 'react';
import Article from './article';

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
                    <Article/>
                </div>
            </div>
        )
    }
}

export default myCard;