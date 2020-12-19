import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginPage from '../pages/login'

test('should render', () => {
    const res = shallow(<LoginPage />)
    expect(toJson(res)).toMatchSnapshot()
})