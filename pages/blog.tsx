import { NextComponentType, NextPage } from "next"
import Head from "next/head"
import AboutMe from "../components/about-me/about-me"
import MainLayout from "../components/main-layout/main-layout"
import PostsList from "../components/posts-list/posts-list"
import Post from "../interfaces/Post"
import { getPostById } from "../services/fb-service"



interface BlogPageProps {
    posts?: Post[]
}

const BlogPage: NextPage<BlogPageProps> = ({posts}) => {

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