import { shallow } from 'enzyme'
import FooterView, {Footer, FooterGroup} from '../footer'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

test ('should render', () => {
    const res = shallow(<FooterView/>)
    expect(toJson(res)).toMatchSnapshot()
})

test('should footer have correct styles', () => {
    const res = renderer.create(<ThemeProvider theme={lightTheme}><Footer/></ThemeProvider>).toJSON()
    expect(res).toHaveStyleRule('background', lightTheme.bg.nav)
    expect(res).toHaveStyleRule('transition', lightTheme.transition.bg)
    expect(res).toHaveStyleRule('color', lightTheme.text.primary)
})

test('should footerGroup have correct styles', () => {
    const res = renderer.create(<ThemeProvider theme={lightTheme}><FooterGroup/></ThemeProvider>).toJSON()
    expect(res).toHaveStyleRule('color', lightTheme.text.primary)
})