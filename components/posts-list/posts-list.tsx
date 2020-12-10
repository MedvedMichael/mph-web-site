import {Post} from '../../interfaces/blog-interfaces'
import styled from 'styled-components'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { AdminContext } from '../main-layout/main-layout'
import dynamic from 'next/dynamic'
import PostView from './post-view'
import { NextRouter, useRouter } from 'next/router'
import { addDefaultPost } from '../../services/client/blog-service'
import Loading from '../loading/loading'
interface PostsListProps {
    posts: Array<Post>
}

export const onAddPostHandler = async (history: NextRouter) => {
    try {
        const secret = localStorage.getItem('isAdmin')
        const id = await addDefaultPost(secret)
        history.push(`/editor?id=${id}`)
    }
    catch (error) {
        // console.log(history)
        history.push(`/`)
    }
}

const PostsList = ({ posts }: PostsListProps) => {

    if(!posts) return <Loading />
    // const [posts, setPosts] = useState(startPosts)
    const isAdmin = useContext(AdminContext) === 'admin'
    const postsViews = posts.map(post => <PostView key={`post${post.id}`} post={post} isAdmin={isAdmin} />)

    const history = useRouter()
    

    const addPostButton = isAdmin ? (
        <div>
            <AddPostButton onClick={() => onAddPostHandler(history)} className="std-button" type="button" value="Add post"></AddPostButton>
        </div>
    ) : null
    return (
        <PostsListView>
            <Title>Posts</Title>
            <CardsList>
                {postsViews}
            </CardsList>
            {!posts || posts.length === 0 ? <NoPostsMessage id="no-posts-message">There are no posts yet :(</NoPostsMessage> : null}
            {addPostButton}
            
        </PostsListView>
    )
}


export default PostsList




const PostsListView = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 2%;
    margin-top: 1rem;
`

const AddPostButton = styled.input`
    display: block;
    margin-left: 1rem;
    padding: .8rem;
    ${props => props.theme.dark ? 'border-color:#000;' : 'border: none;'}
`

const CardsList = styled.div`
    margin-top: 1.5rem;
`


const Title = styled.h1`
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.text.primary};
`
const NoPostsMessage = styled.h3`
    text-align: center;
    color: ${props => props.theme.text.primary};
`