interface Comment {
    name: string,
    text: string,
    timestamp: Date,
    postId: string
}

interface Post {
    id: string,
    title: string,
    text: string,
    images?: string[],
    comments: Array<Comment>
}

export default Post
export type {Comment}