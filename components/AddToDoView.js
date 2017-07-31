/**
 * Created by WuTong on 2017/7/20.
 */
import React, { Component, PropTypes } from 'react'
class AddTodoView extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    type="text"
                    onKeyUp={e => this.handleClick(e)}
                    placeholder="input todo item"
                    ref={(input) => this.input = input} />
            </header>
        )
    }

    handleClick(e) {
        if (e.keyCode === 13) {
            const node = this.input;
            const text = node.value.trim();
            text && this.props.onAddClick(text);
            node.value = '';
        }
    }
}

export default AddTodoView;