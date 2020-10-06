import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'

interface PictureNextApiRequest extends NextApiRequest {
    query: {
        name: string
    }
}

export default function getByName(req: PictureNextApiRequest, res: NextApiResponse) {
    const pictureURL: string = `./pictures/${req.query.name}`
    res.setHeader('Content-Type', 'image/jpg')
    const imageBuffer = fs.readFileSync(pictureURL)
    res.status(200).send(imageBuffer)

}