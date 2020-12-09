import { NextApiRequest, NextApiResponse } from "next"
import { deleteCommentsOfPost, deletePost, getPostById, patchPost } from "../../../services/server/fb-service"


interface GetPostQuery extends NextApiRequest {
    query: {
        id: string
        secret: string
    }
}

export default async function getPost(req: GetPostQuery, res: NextApiResponse) {

    try {
        if (req.method === 'GET') {
            const post = await getPostById(req.query.id).then(res => res.data())
            if (!post) {
                return res.status(404).send(null)
            }

            res.send({ post })
        }

        else {
            if (req.query.secret !== process.env.SECRET_WORD) 
                return res.status(404).send(null);

            if (req.method === 'PATCH') {
                const result = await patchPost(req.query.id, JSON.parse(req.body))
                res.send(result)
            }

            else if (req.method === 'DELETE') {
                if (req.query.secret !== process.env.SECRET_WORD) return res.status(404).send(null);
                await deletePost(req.query.id)
                await deleteCommentsOfPost(req.query.id)
                res.status(200).send(null)
            }
        }
    }
    catch (error) {
        console.log(error)
        return res.status(500).send(null)
    }
}