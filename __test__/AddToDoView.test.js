/**
 * Created by WuTong on 2017/7/20.
 */
import React from 'react'
import AddTodoView from '../components/AddToDoView'
import Article from '../components/article'
import Article2 from '../components/article/article'
import App from '../components/app'
import { shallow } from 'enzyme'
import { monut } from 'enzyme'

const setup = () => {
    // 模拟 props
    const props = {
        // Jest 提供的mock 函数
        onAddClick: jest.fn( (e) => {
        })
    };

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    const wrapper = shallow(<AddTodoView {...props} />);
    return {
        props,
        wrapper
    }
}

describe('AddTodoView', () => {
    const { wrapper, props } = setup();

    // case1
    // 通过查找是否存在 Input,测试组件正常渲染
    it('AddTodoView Component should render', () => {
        //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
        // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        expect(wrapper.find('input').exists());
    })

    // case2
    // 输入内容并敲下回车键，测试组件调用props的方法
    // it('When the Enter key was pressed, onAddClick() shoule be called', () => {
    //     // mock input 输入和 Enter事件
    //     const mockEvent = {
    //
    //         keyCode: 13, // enter 事件
    //         target: {
    //             value: 'Test',
    //         },
    //
    //     }
    //     // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    //     wrapper.find('input').simulate('keyup',mockEvent);
    //     // 判断 props.onAddClick 是否被调用
    //     expect(props.onAddClick).toBeCalled();
    // })

    it('test article', () => {
        const wrapper= shallow(<Article/>);
        expect(wrapper.find('p').length).toBe(3);
        expect(wrapper.find('p').first().text()).toBe('Model');
        expect(wrapper.find('p').at(0).text()).toBe('Model');

    })

    it('test props article', () => {
        const props = {
            first: 'tong',
            last: 'wu',
        };
        const wrapper= shallow(<Article2 {...props}/>);

        expect(wrapper.find('span').at(0).text()).toBe('tong');
    })

    it('test app', () => {
        const wrapper= shallow(<App/>);
        expect(wrapper.find('p').first().text()).toBe('Hello, world!');
        expect(wrapper.find('.swiper-wrapper').length).toBe(1);
    })

    // case3
    // 没有输入内容并敲下回车键，测试组件没有调用props的方法
    // it('When the Enter key was pressed without text, onAddClick() shoule not be called', () => {
    //     // mock input 输入和 Enter事件
    //     const mockEvent = {
    //         keyCode: 13, // enter 事件
    //         target: {
    //             value: 'test'
    //         }
    //     }
    //     // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    //     wrapper.find('input').simulate('keyup',mockEvent)
    //     // 判断 props.onAddClick 是否被调用
    //     expect(props.onAddClick).not.toBeCalled()
    // })
    //
    // // case4
    // // 创建完成后，input框被晴空
    // it('input value should be empty when todo is created', () => {
    //     const mockEvent = {
    //         keyCode: 13, // enter 事件
    //         target: {
    //             value: 'Test'
    //         }
    //     }
    //     // 通过 Enzyme 提供的 simulate api 模拟 DOM 事件
    //     wrapper.find('input').simulate('keyup',mockEvent)
    //     expect(mockEvent.target.value === '')
    // })
})