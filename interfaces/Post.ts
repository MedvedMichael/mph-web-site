interface Comment {
    name: string,
    text: string,
    timestamp: string,
    postId: string
}

interface Post {
    id: string,
    title: string,
    text: string,
    comments: Array<Comment>
}

export default Post
export type {Comment}