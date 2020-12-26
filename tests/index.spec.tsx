import { shallow } from 'enzyme'
import Home from '../pages/index'
const TestComponent = ({src}) => <div>{src}</div>

test ('should render', () => {
    const res = shallow(<Home />)
    expect(res).toMatchSnapshot()
})