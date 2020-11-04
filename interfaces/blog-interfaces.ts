export interface Comment {
    name: string,
    text: string,
    timestamp: Date,
    postId: string
}

export interface Post {
    id: string,
    title: string,
    text: string,
    images?: string[],
    comments: Array<Comment>
}
