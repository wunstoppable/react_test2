/**
 * Created by WuTong on 2017/8/6.
 */
import React from 'react'

class article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="article">
                <section>
                    <span>{this.props.first}</span>
                    <span>{this.props.last}</span>
                </section>
                <span></span>
                <a>About</a>
            </div>
        )

    }


}

export default article;