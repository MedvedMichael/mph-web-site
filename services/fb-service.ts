import posts, {comments} from '../config/fb'
import Post from '../interfaces/Post'

export const getPostById = (id: string) => posts.doc(id).get()

export const getAllPosts = async () => {
    const res = await posts.get()
    res.forEach(post => post.data())
    return res
}

export const getAllComments = async () => {
    const res = await comments.get()
    res.forEach(post => post.data())
    return res
}