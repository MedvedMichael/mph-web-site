import { NextPage } from "next"
import { useEffect, useState } from "react"
import Loading from "../components/loading/loading"
import MainLayout from "../components/main-layout/main-layout"
import PostsList from "../components/posts-list/posts-list"
import { Post } from "../interfaces/blog-interfaces"
import { getAllPosts } from "../services/client/blog-service"

interface BlogPageProps {
    posts?: Post[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts: serverPosts }) => {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        if (!posts) {
            getPosts().then(({ posts }) => {
                setPosts(posts)
            })
        }
    })

    return (
        <>
            <MainLayout title={'Blog'}>
                <PostsList posts={posts ? posts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()) : null} />
            </MainLayout>
        </>
    )
}

const getPosts = async () => {
    const posts: Post[] = await getAllPosts()
    return { posts }
}


BlogPage.getInitialProps = async ({ req }) => {
    try {
        if (!req)
            throw new Error()

        return getPosts()
    }
    catch (err) {
        return { posts: null }
    }
}

export default BlogPage