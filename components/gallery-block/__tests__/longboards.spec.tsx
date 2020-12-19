import { render, shallow } from 'enzyme'
import Longboards from '../longboards'
import {lightTheme} from '../../themes'
import {ThemeProvider} from 'styled-components'
import 'jest-styled-components'

import renderer from 'react-test-renderer'

const ThemeProviderWrapper = ({ children }) => (
    <ThemeProvider theme={lightTheme}>
        {children}
    </ThemeProvider>
)

export const shallowWithTheme = tree => shallow(tree, {
    wrappingComponent: ThemeProviderWrapper
})

export const renderWithTheme = (children: any) =>
    render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);

test('should trigger onClick', () => {
    const func = jest.fn()
    const config = {
        onImageClick: func
    }

    const res = shallow(<Longboards {...config}/>)
    const gridAreas = ["main", "right-up", "right-center", "right-down", "down-center-right", "down-center-left", "left-down"]
    gridAreas.forEach(item => res.find(`[gridArea="${item}"]`).simulate("click"))
    
    expect(func).toBeCalledTimes(gridAreas.length)
})

test('should have right styles', () => {
    const func = jest.fn()
    const config = {
        onImageClick: func
    }

    const tree = renderer.create(<ThemeProvider theme={lightTheme}><Longboards {...config}/></ThemeProvider>).toJSON()
    expect(tree).toHaveStyleRule('background', lightTheme.bg.primary)
    expect(tree).toHaveStyleRule('transition', lightTheme.transition.bg)
})