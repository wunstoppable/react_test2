/**
 * Created by WuTong on 2017/7/20.
 */
import React from 'react';
import AddTodoView from '../components/AddToDoView'
import renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <AddTodoView/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})