import { NextApiRequest, NextApiResponse } from "next";
import { addNewPost } from '../../services/server/fb-service'

export default async function addPost(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') throw new Error()

        const uuid = await addNewPost()
        return res.send({ id: uuid })
        
    }
    catch (error) {
        return res.status(500).send(null)
    }
}