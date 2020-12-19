import { shallow } from 'enzyme'
import Spinner from '../spinner'
import toJson from 'enzyme-to-json'

test('should render corr', () => {
    const res = shallow(<Spinner/>)
    expect(toJson(res)).toMatchSnapshot()
})