/**
 * Created by WuTong on 2017/8/13.
 */
import React from 'react';
import App from '../components/app.js'
import renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <App/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})