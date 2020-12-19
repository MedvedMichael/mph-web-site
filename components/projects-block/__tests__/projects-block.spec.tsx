import { shallow } from 'enzyme'
import ProjectsBlock, {ProjectsBlockView} from '../projects-block'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

test('should have correct styles', () => {
    const tree = renderer.create(<ThemeProvider theme={lightTheme}><ProjectsBlockView/></ThemeProvider>).toJSON()
    expect(tree).toHaveStyleRule('color', lightTheme.text.primary)
})

test ('should render', () => {
    const res = shallow(<ProjectsBlock/>)
    expect(toJson(res)).toMatchSnapshot()
})

