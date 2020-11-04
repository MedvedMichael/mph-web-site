import { NextApiRequest, NextApiResponse } from "next"
import { getPostById, patchPost } from "../../../services/server/fb-service"


interface GetPostQuery extends NextApiRequest {
    query: {
        id: string
    }
}

export default async function getPost (req: GetPostQuery, res: NextApiResponse) {
    if (req.method === 'GET') {
        const post = await getPostById(req.query.id).then(res => res.data())
        if (!post) {
            return res.status(404).send(null)
        }

        res.send({ post })
    }

    else if(req.method === 'PATCH') {
        const result = await patchPost(req.query.id, JSON.parse(req.body))
        res.send(result)
    }
}