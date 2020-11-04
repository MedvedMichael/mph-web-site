import { NextPage } from "next"
import { useState } from "react"
import MainLayout from "../components/main-layout/main-layout"
import PostsList from "../components/posts-list/posts-list"
import {Post} from "../interfaces/blog-interfaces"
import { getAllPosts } from "../services/client/blog-service"

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


BlogPage.getInitialProps = async () => {
    try {
        const posts: Post[] = await getAllPosts()
        return {posts}
    }
    catch (err) {
        console.log(err)
        return {posts:null}
    }
}

export default BlogPage