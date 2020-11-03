import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MainLayout from "../components/main-layout/main-layout"
import Post from "../interfaces/Post"
import { RSISImage } from "react-simple-image-slider";
import dynamic from "next/dynamic";
import hostImage from "../services/image-hosting"
const SimpleImageSlider = dynamic(() => import('react-simple-image-slider'), { ssr: false });

interface EditorPageProps {
    post?: Post,
    id?: string
}

//@ts-ignore
const EditorPage: NextPage = ({post, id}: EditorPageProps) => {

    // const {text, title, images} = post
    const [text, setText] = useState(post.text)
    const [title, setTitle] = useState(post.title)
    const [images, setImages] = useState(post.images ? post.images : []) 
//['https://kimcoder.github.io/demo/react-simple-image-slider/images/2.jpg','https://kimcoder.github.io/demo/react-simple-image-slider/images/5.jpg']
    const [slider, setSlider] = useState(null)
    const imgs: RSISImage[] = images.map<RSISImage>(img => {return {url: img}})
    
    const history = useRouter()
    
    useEffect(() => {
        if(!post || localStorage.getItem('isAdmin') !== process.env.SECRET_WORD) {
            history.push('/404')
        }
    })

    const postPictureHandler = async ({target}) => {
        const url = await target.files[0].arrayBuffer().then(buffer => hostImage(Buffer.from(buffer)))
        // console.log(url)
        setImages([...images, url])
    }

    const saveChangesHandler = async () => {
        const res = await fetch(`${process.env.API_URL}/api/post/` + id, {
            method: 'PATCH',
            mode: 'cors',
            body: JSON.stringify({title, text, images})
        })
        if(res.ok)
        history.push('/blog')

    }



    return (
        <MainLayout>
            <EditorPageView>
                <Title>Editor</Title>

                <TitleEditor placeholder="Input title" value={title} onChange={({ target }) => setTitle(target.value)}></TitleEditor>
                <TextEditor placeholder="Input text" value={text} onChange={({ target }) => setText(target.value)}></TextEditor>
                {slider}
                {imgs.length ? <SliderContainer >
                    <SimpleImageSlider width='100%' height='100%' images={imgs}>
                    </SimpleImageSlider>
                </SliderContainer> : null}
                <div style={{ marginTop: '1rem', display: 'flex' }}>
                    <PostPictureButton>
                        <input type="file" onChange={postPictureHandler} />
                        Post Picture
                </PostPictureButton>
                </div>
                <SaveChangesButton>
                    <button className="std-button" onClick={saveChangesHandler}>Save</button>
                </SaveChangesButton>
            </EditorPageView>
        </MainLayout>
    )
}

interface EditorContext extends NextPageContext {
    query: {
        id: string
    }
}

EditorPage.getInitialProps = async ({query}: EditorContext) => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/post/` + query.id)
        const post: Post = await res.json().then(r => r.post)
        return {post, id: query.id}
    }
    catch (err) {
        return {post: null}
    }
}

export default EditorPage

const Title = styled.h2`
    display: block;
    margin: 0 auto;
    color: ${props => props.theme.text.primary};

`

const SliderContainer = styled.div`
    position: relative;
    margin: 0 auto;

    width:80vw;
    height: 45vw;
`

const EditorPageView = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

`

const TitleEditor = styled.input`
    font-size: ${props => props.theme.fontSizes[1]};
    padding: .5rem;
    margin-top: 1rem;
`

const TextEditor = styled.textarea`
    font-size: ${props => props.theme.fontSizes[1]};
    resize: none;
    min-height: 20rem;
`

const PostPictureButton = styled.label`
    color: ${props => props.theme.text.primary};
    cursor: pointer;
    background: #3160d6;
    padding: .5rem;
    border-radius: .25rem;
    margin: 0 auto;
`

const SaveChangesButton = styled.div`
    margin-top: 1rem;

`