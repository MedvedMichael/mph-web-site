import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SkillsBlock, {SkillsBlockContainer, TechCard} from '../skills-block'
import * as React from 'react';
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'
import 'jest-styled-components'

test ('should have correct styles', () => {
    const res = renderer.create(<ThemeProvider theme={lightTheme}><SkillsBlockContainer/></ThemeProvider>).toJSON()
    expect(res).toHaveStyleRule('background', lightTheme.bg.inset)
    expect(res).toHaveStyleRule('transition', lightTheme.transition.bg)
    expect(res).toHaveStyleRule('color', lightTheme.text.primary)
})

test ('should render', () => {
    const res = shallow(<SkillsBlock/>)
    expect(toJson(res)).toMatchSnapshot()
})

test ('should render tech card', () => {
    const res = shallow(<TechCard path="path" title="title"/>)
    expect(toJson(res)).toMatchSnapshot()
})
const mockSetState = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: initial => [initial, mockSetState]
}));

test ('should invert on click', () => {
    
    const res = shallow(<TechCard path="path" title="title"/>)
    
    res.dive().simulate('click')
    expect(mockSetState).toBeCalledTimes(1)
    expect(res.dive().get(0).props.style).toStrictEqual({})
})



// jest.mock('react', () => ({
//     ...jest.requireActual('react')
// }));