import Post from '../../interfaces/Post'
import styled from 'styled-components'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { AdminContext } from '../main-layout/main-layout'
import dynamic from 'next/dynamic'
import PostView from './post-view'
interface PostsListProps {
    posts: Array<Post>
}

const PostsList = ({ posts: startPosts }: PostsListProps) => {
    const [posts, setPosts] = useState(startPosts)
    const isAdmin = useContext(AdminContext) === 'admin'
    const postsViews = posts.map(post => <PostView key={`post${post.id}`} post={post} isAdmin={isAdmin} />)

    const addPostButton = isAdmin ? (
        <div>
            <AddPostButton className="std-button" type="button" value="Add post"></AddPostButton>
        </div>
    ) : null
    return (
        <PostsListView>
            <Title>Posts</Title>
            <CardsList>
                {postsViews}
            </CardsList>
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
    margin-top: 6rem;
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
