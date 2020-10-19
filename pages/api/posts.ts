import { NextApiRequest, NextApiResponse } from "next";
import {getPostById} from '../../services/fb-service'


const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    // console.log(posts)
    const post = await getPostById('1234')
    res.status(200).send(post)
}

export default getPosts