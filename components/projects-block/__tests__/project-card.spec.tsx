import { shallow } from 'enzyme'
import ProjectCard from '../project-card'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../themes'

test('should render all sources', () => {
    const props = {
        title: 'title',
        text: 'text',
        image: 'image',
        src: ['src1', 'src2', 'src3']
    }
    type RendererChildren = {
        children: any
    }
    const res = renderer.create(<ThemeProvider theme={lightTheme}><ProjectCard {...props}/></ThemeProvider>).toJSON() as RendererChildren
    expect(res.children.find(item => item.type === 'div').children.filter(item => item.type === 'a')).toHaveLength(props.src.length)
})

test('should render without sources', () => {
    const props = {
        title: 'title',
        text: 'text',
        image: 'image'
    }
    type RendererChildren = {
        children: any
    }
    const res = renderer.create(<ThemeProvider theme={lightTheme}><ProjectCard {...props}/></ThemeProvider>).toJSON() as RendererChildren
    expect(res.children.find(item => item.type === 'div')).toBe(undefined)
})

test('should render not selected', () => {
    const props = {
        title: 'title',
        text: 'text',
        image: 'image',
        src: ['src1', 'src2', 'src3'],
        selected: true
    }
    type RendererChildren = {
        children?: any,
        props?: {
            style: any
        }
    }
    const res = renderer.create(<ThemeProvider theme={lightTheme}><ProjectCard {...props}/></ThemeProvider>).toJSON() as RendererChildren
    expect(res.props.style).toStrictEqual({})
})