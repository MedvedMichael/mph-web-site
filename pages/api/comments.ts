import { NextApiRequest, NextApiResponse } from "next"
import { type } from "os"
import { getCommentById, postComment } from "../../services/fb-service"

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        // console.log(req.body)
        // console.log(typeof req.body)
        const uuid = await postComment(JSON.parse(req.body))
        const comment = await getCommentById(uuid).then(res => res.data())
        res.status(200).send({comment})
    }
    
}


export default comment