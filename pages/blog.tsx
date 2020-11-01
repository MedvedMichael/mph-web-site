import { NextPage } from "next"
import { useState } from "react"
import MainLayout from "../components/main-layout/main-layout"
import PostsList from "../components/posts-list/posts-list"
import Post from "../interfaces/Post"

interface BlogPageProps {
    posts?: Post[]
}

const BlogPage: NextPage<BlogPageProps> = (props) => {

    const [posts, setPosts] = useState(props.posts)
    return (
        <>
            <MainLayout>
                <PostsList posts={posts} />
            </MainLayout>
        </>
    )
}

// import hostImage from "../services/image-hosting"

// const UploadPage = () => {

//     const uploadFile = (target: HTMLInputElement) => {
//         target.files[0].arrayBuffer().then(buffer => hostImage(Buffer.from(buffer)).then(res => console.log(res)))
//     }
//     return (
//     <>
//         <input type="file" onChange={({target}) => uploadFile(target)}/>
//     </>)
// }

// export default UploadPage




BlogPage.getInitialProps = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/posts`)
        const posts: Post[] = await res.json()
        
        return {posts}
    }
    catch (err) {
        console.log(err)
        return {posts:null}
    }
}

export default BlogPage