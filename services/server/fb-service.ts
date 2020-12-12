import {admin, posts, comments} from '../../config/fb'
import { v4 as uuidv4 } from 'uuid';

export const getPostById = (id: string) => posts.doc(id).get()

export const getAllPosts = async () => {
    const res = await posts.get()
    res.forEach(post => post.data())
    return res
}

export const patchPost = async (id: string, props: {text: string, title: string, images: string[]}) => {
    return await posts.doc(id).update(props)
}

export const deletePost = async (id: string) => {
    return await posts.doc(id).delete()
}

export const deleteCommentsOfPost = async (id: string) => {
    const res = await comments.get()
    res.forEach(post => post.data())
    const res2 = res.docs.map(doc => doc.data())
    const allComments = []

    res2.forEach((doc, index) => {
        if(doc.postId === id) {
            allComments.push({...doc, id: res.docs[index].id})
        }
    })


    const promises = allComments.map(comm => comments.doc(comm.id).delete())
    await Promise.all(promises)
    return allComments.length
    // console.log(allComments)

}

export const addNewPost = async () => {
    const uuid = uuidv4()
    await posts.doc(uuid).set({title: 'Title', text: 'Text', images: [], timestamp: admin.firestore.Timestamp.fromDate(new Date())})
    return uuid
}

interface PostCommentProps {
    name: string,
    text: string,
    postId: string,
}

export const postComment = async (props: PostCommentProps) => {
    const uuid = uuidv4()
    await comments.doc(uuid).set({...props, timestamp: admin.firestore.Timestamp.fromDate(new Date())})
    return uuid
}

export const getCommentById = (uuid: string) => comments.doc(uuid).get()

export const getAllComments = async () => {

    const res = await comments.get()
    res.forEach(post => post.data())
    return res
}




