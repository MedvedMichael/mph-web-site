import { shallow } from 'enzyme'
import PageNotFoundPage, {PageNotFound} from '../pages/404'
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer'
import {lightTheme} from '../components/themes'
import {ThemeProvider} from 'styled-components'
import 'jest-styled-components'
import React from 'react';


test('should render', () => {
    const res = shallow(<PageNotFound />)
    expect(toJson(res)).toMatchSnapshot()
})

const TestElement = ({children}) => <div>{children}</div>

jest.mock('../components/main-layout/main-layout.tsx', () => TestElement)

test ('page should render', () => {
    const res = shallow(<PageNotFoundPage />)
    expect(toJson(res)).toMatchSnapshot()
})

test('should have correct styles', () => {

    type RendererChild = {
        type: string
    }
    type RendererChildren = {
        children: RendererChild[]
    }

    const tree = renderer.create(
        <ThemeProvider theme={lightTheme}>
            <PageNotFound />
        </ThemeProvider>
    ).toJSON() as RendererChildren

    expect(tree.children.filter(item => item.type === 'h1')[0]).toHaveStyleRule('color', lightTheme.text.primary)
})