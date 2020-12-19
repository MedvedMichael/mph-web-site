import { shallow } from 'enzyme'
import ProjectsSlider, { DotView } from '../projects-slider'
import {projects} from '../projects'
import * as React from 'react';
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'
import 'jest-styled-components'
import toJson from 'enzyme-to-json';

test('should render', () => {
    const res = shallow(<ProjectsSlider projects={projects}/>)
    expect(toJson(res)).toMatchSnapshot()
})

const mockSetState = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: initial => [initial, mockSetState]
}));

test ('should set selected dot on click', () => {
    const res = shallow(<ProjectsSlider projects={projects}/>)
    res.find(DotView).first().simulate('click')
    expect(mockSetState).toBeCalledTimes(1)
})

test ('should have correct styles', () => {
    const res = renderer.create(<ThemeProvider theme={lightTheme}><DotView/></ThemeProvider>).toJSON()
    expect(res).toHaveStyleRule('transition', lightTheme.transition.bg)
})