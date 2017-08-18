import React from 'react';
import d3chart from'../d3/test_d3';
import Child from './child';
import Hello from './Hello';
import Login from './login';
import Card from './card'
import Swiper from 'swiper';

class App extends React.Component {

    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.handleRedexClick = this.handleRedexClick.bind(this);
        this.state = {
            info : 'default',
            data : [10, 20, 30, 40, 33, 24, 12, 5],
            img : ['https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/01-adriana-236x500.jpg',
                'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/02-alessandra-236x500.jpg',
                'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/03-lily-236x500.jpg',
                'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/04-elsa-236x500.jpg',
                'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/05-jasmine-236x500.jpg',
            'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/06-josephine-236x500.jpg',
            'https://dm.victoriassecret.com/imagefeatures/0x0/1267904620233/07-lais-236x500.jpg']
        }
    }

    componentDidMount(){
        this.setState({info : 'new test'});
        let props = {width:300,height:400};
        //测试d3
        d3chart.create(this.div,props, this.state.data);

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 5,
            slidesPerGroup: 5,
            paginationClickable: true,
            nextButton: '.next',
            prevButton: '.prev',
            // spaceBetween: 30,
            freeMode: true,
            //resistanceRatio:0
        });
    }

    handleClick() {
        console.log("Input value: " + this.input.value);
        var value = this.input.value;
        this.setState({info : value});
        console.log(this.state.info);
    }

    handleChange(value){
        this.setState({info : value})
    }

    handleRedexClick() {
        var value = this.input.value;
        this.props.clickButton(value);
    }

    render(){
        return (
            <div className="test">
                <svg style={{'position': 'absolute', 'width': '0', 'height': '0', 'overflow': 'hidden'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <symbol id="icon-chevron-thin-left" viewBox="0 0 20 20">
                            <title>chevron-thin-left</title>
                            <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
                        </symbol>
                        <symbol id="icon-chevron-thin-up" viewBox="0 0 20 20">
                            <title>chevron-thin-up</title>
                            <path d="M2.582 13.891c-0.272 0.268-0.709 0.268-0.979 0s-0.271-0.701 0-0.969l7.908-7.83c0.27-0.268 0.707-0.268 0.979 0l7.908 7.83c0.27 0.268 0.27 0.701 0 0.969s-0.709 0.268-0.978 0l-7.42-7.141-7.418 7.141z"></path>
                        </symbol>
                        <symbol id="icon-close" viewBox="0 0 24 24">
                            <title>close</title>
                            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                        </symbol>
                    </defs>
                </svg>






                <p>Hello, world!</p>
                <input type="text" ref={(input) => this.input = input}/>
                <input className="btn btn-primary" type="button" onClick={() => this.handleClick()} value="Button"/>
                <input className="btn btn-warning" type="button" onClick={this.handleRedexClick} value="Button for redux"/>
                <p>{this.state.info}</p>
                <p>This is props: {this.props.test}</p>
                <div ref={(div) => this.div = div}></div>
                <Child info={info => this.handleChange(info)}/>
                <Hello info={this.state.info}/>

                <div className="carousel">
                    <div className="carousel-items">
                        <div className="carousel-warp">
                            {/*<button className="prev">*/}
                                {/*<svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" style={{'pointer-events': 'none', 'display': 'block', 'width': '100%', 'height': '100%'}}><g><path className="path1" d="M18.8 16l-16-16-2.8 2.8 13.2 13.2-13.2 13.2 2.8 2.8 16-16z"></path></g></svg>*/}
                            {/*</button>*/}
                            <button className="prev">
                                <svg className="icon icon-chevron-thin-left"><use xlinkHref="#icon-chevron-thin-left"></use></svg>
                            </button>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {this.state.img.map((link, index) => <Card key={index} link={link}/>)}
                                </div>
                            </div>
                            <button className="next">
                                <svg className="icon icon-chevron-thin-left"><use xlinkHref="#icon-chevron-thin-up"></use></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div><div>haha</div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div>
                <div>haha</div>

            </div>
        );
    }
}

App.propTypes = {
    test: React.PropTypes.string.isRequired,
    clickButton: React.PropTypes.func.isRequired
}

export default App;