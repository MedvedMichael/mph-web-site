import FooterView, {Footer, FooterGroup} from '../footer'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import React from 'react'
import { AdminContext } from '../../main-layout/main-layout'
import { shallow } from 'enzyme'


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => 'admin'
}))

test ('should have admin h4', () => {
    
    const res = shallow(
        <ThemeProvider theme={lightTheme}>
            <FooterView/>
        </ThemeProvider>)
    //@ts-ignore
    expect(res.find(FooterView).dive().find('h4').first().get(0).props.children).toStrictEqual("Logined as Admin")

})