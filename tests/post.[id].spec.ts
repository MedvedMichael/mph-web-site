import { NextApiRequest, NextApiResponse } from 'next'
import managePost, { GetPostQuery } from '../pages/api/post/[id]'
import { deleteCommentsOfPost, deletePost, getPostById, patchPost } from "../services/server/fb-service"
let testPost = { text: '', title: '' }



jest.mock('../services/server/fb-service.ts', () => ({
    deleteCommentsOfPost: jest.fn((id: string) => Promise.resolve()),
    deletePost: jest.fn((id: string) => Promise.resolve()),
    getPostById: jest.fn((id: string) => Promise.resolve({
        data: () => Promise.resolve(id === '1' ? testPost : null)
    })),
    patchPost: jest.fn((id: string, updates: string) => Promise.resolve(testPost))
}))

const req = ({
    query: {
        id: '1',
        secret: 'secret'
    },

})


export class TestResponse {
    _status: number

    status(number: number) {
        this._status = number
        return this
    }

    send(value: any) {
        return { value, status: this._status }
    }
}

process.env.SECRET_WORD = 'secret'


test('should give posts', async () => {
    const res = new TestResponse()
    await managePost({ ...req, method: 'GET' } as GetPostQuery, res as unknown as NextApiResponse)

    expect(getPostById).toBeCalledTimes(1)
})

test('should patch post with correct secret', async () => {
    const res = new TestResponse()
    await managePost({ ...req, body: JSON.stringify({}), method: 'PATCH' } as GetPostQuery, res as unknown as NextApiResponse)
    expect(patchPost).toBeCalledTimes(1)
})

test('should delete post with correct secret', async () => {
    const res = new TestResponse()
    await managePost({ ...req, method: 'DELETE' } as GetPostQuery, res as unknown as NextApiResponse)
    expect(deletePost).toBeCalledTimes(1)
})

test('should return null if there is no post', async () => {
    const res = new TestResponse()
    const result = await managePost({ ...req, query: {...req.query, id: '1234'}, method: 'GET' } as GetPostQuery, res as unknown as NextApiResponse)
    expect(result).toStrictEqual({"value": null, "status": 404})
})

test('should return null if secret word is incorrect', async () => {
    const res = new TestResponse()
    const result = await managePost({ ...req, query: {...req.query, id: '1234', secret: 'not secret'}, method: 'DELETE' } as GetPostQuery, res as unknown as NextApiResponse)
    expect(result).toStrictEqual({"value": null, "status": 500})
})

test ('should return null if secret word is incorrect', async () => {
    const res = new TestResponse()
    const result = await managePost({ ...req, method: 'OTHER' } as GetPostQuery, res as unknown as NextApiResponse)
    expect(result).toStrictEqual({"value": null, "status": 500})
})


// jest.mock('../../../../services/server/fb-service.ts', () => ({
//     ...jest.requireActual('../../../../services/server/fb-service.ts')
// }))