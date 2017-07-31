import React from 'react'; //react
import ReactDOM from 'react-dom'; //react-dom
import App from './containers/app'; //index自定义组件
import { Provider } from 'react-redux';
import './components/app.css';
import reducers from './reducers';
import { createStore } from 'redux'

var store = createStore(reducers);
//将其渲染到页面上id为app的DOM元素内
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById("app"));
