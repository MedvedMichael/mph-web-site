import {admin, posts, comments} from '../config/fb'
import { v4 as uuidv4 } from 'uuid';

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

interface PostCommentProps {
    name: string,
    text: string,
    postId: string,
}

export const postComment = async (props: PostCommentProps) => {
    const uuid = uuidv4()
    // console.log(props)
    // console.log(name)
    // console.log(posts)
    await comments.doc(uuid).set({...props, timestamp: admin.firestore.Timestamp.fromDate(new Date())})
    return uuid
}

export const patchPost = async (id: string, props) => {
    // console.log(await (await posts.doc(id).get()).data())
    return await posts.doc(id).update(props)
}

export const getCommentById = (uuid: string) => comments.doc(uuid).get()


