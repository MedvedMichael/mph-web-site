import { NextApiRequest, NextApiResponse } from "next";
import FormData from 'form-data' 
import fetch from 'node-fetch'

export interface PostImageRequest extends NextApiRequest {
    query: {
        secret: string
    },
    body: string
}



export default async function postImage (req: PostImageRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST' && req.query.secret === process.env.SECRET_WORD) {
            const IMAGE_API_URL = 'https://api.imgbb.com/1/upload'
            const form = new FormData()
            const imageStr = JSON.parse(req.body).image
            form.append('image', imageStr)

            const url = new URL(IMAGE_API_URL)
            url.searchParams.set('key', process.env.IMAGE_HOSTING_KEY)

            const display_url = await fetch(url.toString(), {
                method: 'POST', 
                headers: form.getHeaders(),
                body: form,
            }).then(res => res.json()).then(res => res.data.display_url)
            res.status(200).send({display_url})
        }
        else throw new Error()
    } catch (error) {
        // console.log(error)
        res.status(500).send(null)
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '50mb'
        }
    }
}