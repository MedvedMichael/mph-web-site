import admin from "firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../interfaces/Post";
import {getAllPosts, getAllComments} from '../../services/server/fb-service'

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const query = await getAllPosts()
    const posts: Array<Post> = query.docs.map(doc => {
        const res = doc.data()
        return { ...res, id: doc.id, comments: [] } as Post
    })

    const commQuery = await getAllComments()
    commQuery.forEach(doc => {
        const res = doc.data()
        const timestamp = res.timestamp
        const date = new admin.firestore.Timestamp(timestamp._seconds, timestamp._nanoseconds).toDate()
        posts.find(post => post.id === res.postId).comments.push({name: res.name, text: res.text, timestamp: date, postId: res.postId})
    })
    res.status(200).send(posts)
}

export default getPosts