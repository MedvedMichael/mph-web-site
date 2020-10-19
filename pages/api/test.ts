import {NextApiRequest, NextApiResponse} from 'next'
import fs from 'fs'

export default function getByName(req: NextApiRequest, res: NextApiResponse) {
    
    res.status(200).send({ok:true})

}