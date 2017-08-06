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
            freeMode: true
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
                            <button className="prev">&lt;</button>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {this.state.img.map((link, index) => <Card key={index} link={link}/>)}
                                </div>
                            </div>
                            <button className="next">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    test: React.PropTypes.string.isRequired,
    clickButton: React.PropTypes.func.isRequired
}

export default App;