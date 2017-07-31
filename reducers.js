/**
 * Created by WuTong on 2017/6/1.
 */
import { combineReducers } from 'redux';
const defaults = {
    STATUS : 'Norm',
    USER: 'hoho'
}

const click = (state = defaults.STATUS, action) => {
    switch (action.type) {
        case 'Click':
            return action.topic;
        default:
            return state;
    }
}

const login = (state = defaults.STATUS, action) => {
    switch (action.type) {
        case 'Login':
            return "login";
        default:
            return state;
    }
}


export default combineReducers({
    status : click,
    login : login
});