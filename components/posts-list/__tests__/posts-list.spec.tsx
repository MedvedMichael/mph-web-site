import PostsList from '../posts-list';
import Spinner from '../../spinner/spinner'
import { act, render, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
import { mount, shallow } from 'enzyme';
import { AdminContext } from '../../main-layout/main-layout';
import ShallowRenderer from 'react-test-renderer/shallow';
import styled, { ThemeProvider } from 'styled-components';
import Providers from '../../Providers';
import { Post } from '../../../interfaces/blog-interfaces';
import PostView from '../post-view';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

// const mockHistoryPush = jest.fn();

// jest.mock("next/router", () => ({
//     useRouter() {
//         return {
//             route: "/",
//             pathname: "",
//             query: "",
//             asPath: "",
//         };
//     },
// }));

// jest.mock('next/router', () => ({
//     ...jest.requireActual('next/router'),
//     useRouter: () => ({
//         push: mockHistoryPush,
//     }),
// }));


const TestComponent = ({children, value}) => (
    <AdminContext.Provider value={value}>
        <Providers>
        {children}
        </Providers>
    </AdminContext.Provider>)

test('should render without crashing', () => {
    const wrapper = shallow(<PostsList posts={[]} />);
    // expect(wrapper.find('h1')).toHaveLength(1);
});

test('should render add button for admin', () => {
    const wrapper = mount(
        <TestComponent value='admin'>
            <PostsList posts={[]} />
        </TestComponent>)
    expect(!wrapper.find('.std-button').debug()).toBe(false)
});


test('should render message is no posts', () => {
    const wrapper = mount(
        <TestComponent value=''>
            <PostsList posts={[]} />
        </TestComponent>)
    expect(wrapper.find('#no-posts-message').get(0).props.children).toBe('There are no posts yet :(')
})

test('should render posts', async () => {
    const posts: Post[] = [
        {
            id: '1',
            title: 'Title',
            text: 'Text',
            images: [''],
            comments: []
        },
        {
            id: '2',
            title: 'Title2',
            text: 'Text2',
            images: [''],
            comments: []
        }
    ]
    
    const wrapper  = shallow(
        <TestComponent value=''>
            <PostsList posts={posts} />
        </TestComponent>)
    expect(wrapper.find(PostsList).dive().find(PostView).length).toBe(posts.length)
})

test('should push to the history on add button click', () => {
    const test = jest.fn()
    const returnFromRouter = {
        push: () => {}
    }
    const test2 = jest.spyOn(returnFromRouter, 'push')
    useRouter.mockImplementation(() => returnFromRouter)
    const wrapper = shallow(
        <TestComponent value='admin'>
            <PostsList posts={[]} />
        </TestComponent>)
    
    
    console.log(wrapper.find(PostsList).dive().debug())
    // wrapper.find('.std-button').last().simulate('click')
    // console.log(test.mock.calls)
    // expect(useRouter).toHaveBeenCalledTimes(1);
})