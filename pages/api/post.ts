import { NextApiRequest, NextApiResponse } from "next";
import {addNewPost} from '../../services/server/fb-service'

export default async function addPost (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        try {
            const uuid = await addNewPost()
            res.send({ id: uuid })
        }
        catch (error) {
            res.status(500).send({error})
        }
    }
}