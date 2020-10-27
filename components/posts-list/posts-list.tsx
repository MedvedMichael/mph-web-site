import Post from '../../interfaces/Post'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface PostsListProps {
    posts: Post[]
}

const PostsList = ({ posts }: PostsListProps) => {
    const postsViews = posts.map(post => <PostView key={`post${post.id}`} post={post} />)
    return (
        <PostsListView>
            {postsViews}
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

interface PostViewProps {
    post: Post,

}

const PostView = ({ post }: PostViewProps) => {
    const { text, title, id } = post
    const history = useRouter()

    const onPostClick = () => {
        history.push(`/post/${id}`)
    }
    return (

        <div className="card border-info mb-3 post-view" onClick={onPostClick}>
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                {text}
            </div>
        </div>
    )
}
export default PostsList