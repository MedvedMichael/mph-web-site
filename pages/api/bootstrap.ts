import { NextApiRequest, NextApiResponse } from "next"
import fs from 'fs'

interface StylesNextApiRequest extends NextApiRequest {
    query: {
        theme: 'dark' | 'light'
    }
}

const getStyles = async (req: StylesNextApiRequest, res: NextApiResponse) => {
    const {theme} = req.query
    fs.readFile(`./styles/${theme === 'dark' ? 'darkly' : 'flatly'}.bootstrap.min.css`, (err, data) => {
        // console.log(`./styles/${theme === 'dark' ? 'darkly' : 'flatly'}.bootstrap.min.css`)
        // console.log(data)
        res.setHeader('Content-Type', 'text/css')
        res.status(200).send(data)
    })
}

export default getStyles