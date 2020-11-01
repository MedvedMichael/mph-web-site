import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../interfaces/Post";
import {getAllPosts, getAllComments} from '../../services/fb-service'

// interface PostResponse {
//     _fieldsProto: {
//         text: {
//             stringValue: string,
//             valueType: string
//         },
//         title: {
//             stringValue: string,
//             valueType: string
//         }
//     }
// }

// interface FirebaseResponseQuery {
//     _materializedDocs: PostResponse[]
// }

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log(posts)
    const query = await getAllPosts()
    const posts: Array<Post> = query.docs.map(doc => {
        const res = doc.data()
        return { ...res, id: doc.id, comments: [] } as Post
    })

    const commQuery = await getAllComments()
    commQuery.forEach(doc => {
        const res = doc.data()
        posts.find(post => post.id === res.postId).comments.push({name: res.name, text: res.text, timestamp: res.timestamp, postId: res.postId})
    })
    res.status(200).send(posts)
}

export default getPosts