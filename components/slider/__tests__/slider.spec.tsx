import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Slider from '../slider'
import renderer from 'react-test-renderer'

test('should render', () => {
    const props = {
        images: [
            'some_url'
        ]
    }
    const res = shallow(<Slider {...props}/>)
    expect(toJson(res)).toMatchSnapshot()
})

test('should not render without images', () => {
    const props = {
        images: []
    }
    const res = shallow(<Slider {...props}/>)
    expect(toJson(res)).toMatchSnapshot()
})


test('should have no styles without bounds', () => {
    const bounds = {
        width: '100px', 
        height: '100px'
    }
    const props = {
        images: [
            'some_url'
        ],
        bounds
    }
    
    const res = renderer.create(<Slider {...props}/>).root.findAllByType('div')
    expect(res[0].props.style).toStrictEqual({...bounds})
})

