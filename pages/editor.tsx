import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MainLayout from "../components/main-layout/main-layout"
import Post from "../interfaces/Post"
import hostImage from "../services/client/image-hosting"
import Slider from "../components/slider/slider"
import { getPostById, patchPost } from "../services/client/blog-service"


interface EditorPageProps {
    post?: Post,
    id?: string
}

// @ts-ignore
const EditorPage: NextPage = ({post, id}: EditorPageProps) => {

    const [text, setText] = useState(post.text)
    const [title, setTitle] = useState(post.title)
    const [images, setImages] = useState(post.images ? post.images : []) 
    const history = useRouter()
    
    useEffect(() => {
        if(!post || localStorage.getItem('isAdmin') !== process.env.SECRET_WORD) {
            history.push('/404')
        }
    })

    const postPictureHandler = async ({target}) => {
        const url = await target.files[0].arrayBuffer().then(buffer => hostImage(Buffer.from(buffer)))
        setImages([...images, url])
    }

    const saveChangesHandler = async () => {
        const res = await patchPost({id, text, title, images})
        if(res.ok)
        history.push('/blog')
    }

    return (
        <MainLayout>
            <EditorPageView>
                <Title>Editor</Title>
                <TitleEditor placeholder="Input title" value={title} onChange={({ target }) => setTitle(target.value)}></TitleEditor>
                <TextEditor placeholder="Input text" value={text} onChange={({ target }) => setText(target.value)}></TextEditor>
                <Slider images={images}/>
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
        const post: Post = await getPostById(query.id)
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