import { NextApiRequest, NextApiResponse } from "next"
import { admin } from "../../config/fb"
import { getCommentById, postComment } from "../../services/server/fb-service"

const comment = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        const uuid = await postComment(JSON.parse(req.body))
        const comment = await getCommentById(uuid).then(res => res.data())
        const {timestamp} = comment
        comment.timestamp = new admin.firestore.Timestamp(timestamp._seconds, timestamp._nanoseconds).toDate()
        res.status(200).send({comment})
    }
    
}


export default comment