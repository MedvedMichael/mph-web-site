import Post from '../../interfaces/Post'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

interface PostsListProps {
    posts: Post[]
}

const PostsList = ({ posts }: PostsListProps) => {
    const postsViews = posts.map(post => <PostView key={`post${post.id}`} post={post} />)
    return (
        <PostsListView>
            <Title>Posts</Title>
            <CardsList>
                {postsViews}
            </CardsList>
        </PostsListView>
    )

}

const PostsListView = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 2%;
    margin-top: 6rem;
    
`

const CardsList = styled.div`
    margin-top: 1.5rem;
`

interface PostViewProps {
    post: Post,

}

const PostView = ({ post }: PostViewProps) => {
    const { text, title, id } = post
    
    return (
        <PostViewCard>
            <CardTitle>
                {title}
            </CardTitle>
            <CardText>
                {text}
            </CardText>
        </PostViewCard>
    )
}
export default PostsList


const Title = styled.h1`
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.text.primary};
`

const PostViewCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: ${props => props.theme.bg.secondary};
  /*Linear gradient... */
    z-index:2;
    
    background-clip: border-box;
    border: ${props => props.theme.border.card};
    border-radius: 0.25rem;
    color: ${props => props.theme.text.primary};
    

    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.bg.card};
        transition: ${props => props.theme.transition.opacity};
        z-index: -1;
        opacity: 0;
        border-radius: 0.25rem;
        /* opacity: 1 */
    }

    &:hover:after {
        opacity: 1;
    }
`

const CardTitle = styled.h2`
    text-align: left;
    text-transform: uppercase;
    margin-left: 1rem;
    margin-top: .5rem;
`

const CardText = styled.h4`
    padding: 1rem 1.5rem;
    

`