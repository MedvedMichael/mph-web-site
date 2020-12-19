import { shallow } from 'enzyme'
import GalleryBlock from '../gallery-block'
import renderer from 'react-test-renderer'
import {lightTheme} from '../../themes'
import {ThemeProvider} from 'styled-components'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'

test ('should render', () => {
    const res = shallow(<GalleryBlock onImageClick={() => null}/>)
    expect(toJson(res)).toMatchSnapshot()
})

test ('should have correct styles', () => {
    const tree = renderer.create(<ThemeProvider theme={lightTheme}><GalleryBlock onImageClick={() => null}/></ThemeProvider>).toJSON()
    expect(tree).toHaveStyleRule('transition', lightTheme.transition.bg)
})