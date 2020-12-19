import { shallow } from 'enzyme'
import Modal from '../modal'
import renderer from 'react-test-renderer'
import {lightTheme} from '../../themes'
import {ThemeProvider} from 'styled-components'
import 'jest-styled-components'

test ("should close on bg click", () => {
    const func = jest.fn()
    const config = {
        src:"", 
        closeModal: func
    }

    const res = shallow(<Modal {...config}/>)
    res.find('[id="modal-bg"]').simulate('click', {
        target: {
            id: 'modal-bg'
        }
    })

    expect(func).toBeCalledTimes(1)
})

test ("should not close on not bg click", () => {
    const func = jest.fn()
    const config = {
        src:"", 
        closeModal: func
    }

    const res = shallow(<Modal {...config}/>)
    res.find('[id="modal-bg"]').simulate('click', {
        target: {
            id: 'other_id'
        }
    })

    expect(func).toBeCalledTimes(0)
})

test('should have right styles', () => {
    const func = jest.fn()
    const config = {
        src:"", 
        closeModal: func
    }

    type RendererChildren = {
        children: any[]
    }

    const tree = renderer.create(<ThemeProvider theme={lightTheme}><Modal {...config}/></ThemeProvider>).toJSON() as RendererChildren
    // console.log(tree.children[0])
    expect(tree.children[0]).toHaveStyleRule('background', lightTheme.bg.primary)
})