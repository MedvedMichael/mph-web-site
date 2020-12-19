import { shallow } from 'enzyme'
import ImageComponent from '../image-component'

test('image onClick should work', () => {
    const src = 'some_url'
    const func = jest.fn()
    const config = {
        src,
        onClick: func
    }
    const res = shallow(<ImageComponent {...config}/>)
    res.find(`[src="${src}"]`).simulate('click')

    expect(func).toBeCalledTimes(1)
})

test('should have correct styles', () => {
    const src = 'some_url',
        gridArea = 'some_area'
    const func = jest.fn()
    const config = {
        src,
        onClick: func,
        gridArea
    }
    const res = shallow(<ImageComponent {...config} />)
    

    expect(res.get(0).props.style.gridArea).toBe(gridArea)
})