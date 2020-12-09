import { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MainLayout from "../components/main-layout/main-layout"
import { Post } from "../interfaces/blog-interfaces"
import hostImage from "../services/client/image-hosting"
import Slider from "../components/slider/slider"
import { deletePost, getPostById, patchPost } from "../services/client/blog-service"
import Spinner from "../components/spinner/spinner"


interface EditorPageProps {
    post?: Post,
    id?: string
}

// @ts-ignore
const EditorPage: NextPage = ({ post, id }: EditorPageProps) => {

    const [text, setText] = useState(post.text)
    const [title, setTitle] = useState(post.title)
    const [images, setImages] = useState(post.images ? post.images : [])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!post || localStorage.getItem('isAdmin') !== process.env.SECRET_WORD) {
            router.push('/404')
        }
    })

    const postPictureHandler = async ({ target }) => {
        setLoading(true)
        const url = await target.files[0].arrayBuffer().then(buffer => hostImage(Buffer.from(buffer), localStorage.getItem('isAdmin')))
        setImages([...images, url])
        setLoading(false)
    }

    const saveChangesHandler = async () => {
        const secret = localStorage.getItem('isAdmin')
        const res = await patchPost({ id, text, title, images, secret })
        console.log(res.body)
        if (res.ok)
            router.push('/blog')
    }

    const removePost = async () => {
        try {
            const secret = localStorage.getItem('isAdmin')
            await deletePost(id, secret)
            router.push('/blog')
        }
        catch (error) {
            router.push('/')
        }

    }


    return (
        <MainLayout title='Editor'>
            <EditorPageView>
                <Title>Editor</Title>
                <TitleEditor placeholder="Input title" value={title} onChange={({ target }) => setTitle(target.value)}></TitleEditor>
                <TextEditor placeholder="Input text" value={text} onChange={({ target }) => setText(target.value)}></TextEditor>
                <Slider images={images} />
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column' }}>
                    {loading ? <Spinner /> : null}
                    <PostPictureButton>
                        <input type="file" onChange={postPictureHandler} />
                        Post Picture
                </PostPictureButton>

                </div>
                <ButtonsGroup>
                <SaveChangesButton className="std-button" onClick={saveChangesHandler}>Save</SaveChangesButton>
                <DeletePostButton className="std-button" onClick={removePost}>Delete</DeletePostButton>
                </ButtonsGroup>
            </EditorPageView>
        </MainLayout>
    )
}

interface EditorContext extends NextPageContext {
    query: {
        id: string
    }
}

EditorPage.getInitialProps = async ({ query }: EditorContext) => {
    try {
        const post: Post = await getPostById(query.id)
        return { post, id: query.id }
    }
    catch (err) {
        return { post: null }
    }
}

export default EditorPage

const ButtonsGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
`

const Title = styled.h2`
    display: block;
    margin: 0 auto;
    color: ${props => props.theme.text.primary};
`

const EditorPageView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

const TitleEditor = styled.input`
    font-size: ${props => props.theme.fontSizes[1]};
    padding: .5rem;
    margin: 2rem 2rem 0 2rem;
    background: ${props => props.theme.bg.secondary};
    color: ${props => props.theme.text.primary};
    font-size: ${props => props.theme.fontSizes[5]};
    padding: .5rem;

`

const TextEditor = styled.textarea`
    font-size: ${props => props.theme.fontSizes[1]};
    resize: none;
    min-height: 20rem;
    background: ${props => props.theme.bg.secondary};
    color: ${props => props.theme.text.primary};
    border: 1px solid #ffffff;
    border-radius: .25rem;
    padding: .5rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    
`

const PostPictureButton = styled.label`
    color: ${props => props.theme.text.primary};
    cursor: pointer;
    background: #3160d6;
    padding: .5rem;
    border-radius: .25rem;
    margin: 1rem auto;
`

const SaveChangesButton = styled.div`
    /* margin: 1rem calc(15vw + 5rem); */
    margin: .5rem;
    text-align: center;
    flex-grow: 1;
    max-width: 20rem;
`

const DeletePostButton = styled.div`
    /* margin: 1rem calc(15vw + 5rem); */
    margin: .5rem;
    max-width: 20rem;
    text-align: center;
    flex-grow: 1;
`