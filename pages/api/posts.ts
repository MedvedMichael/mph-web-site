import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../interfaces/Post";
import {getAllPosts} from '../../services/fb-service'

interface PostResponse {
    _fieldsProto: {
        text: {
            stringValue: string,
            valueType: string
        },
        title: {
            stringValue: string,
            valueType: string
        }
    }
}

interface FirebaseResponseQuery {
    _materializedDocs: PostResponse[]
}

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log(posts)
    const query = await getAllPosts()
    const posts: Post[] = query.docs.map(doc => {
        const {text, title} = doc.data()
        return { text, title, id: doc.id } as Post
    })

    res.status(200).send(posts)
}

export default getPosts