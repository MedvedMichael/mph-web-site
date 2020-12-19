import { NextApiRequest, NextApiResponse } from 'next'
import { addNewPost } from '../services/server/fb-service'
import { MockCommentsQueryElement, MockPostsQueryElement } from '../services/server/__tests__/fb-service.spec'
import addPost from '../pages/api/post'
import { TestResponse } from './post.[id].spec'
import {v4} from 'uuid'

jest.mock('../config/fb', () => (
    {
        posts: {
            get: () => new Promise((resolve) => resolve(new MockPostsQueryElement())),
            doc: (id: string) => ({
                update: (props) => new Promise(resolve => resolve(props)),
                delete: () => new Promise(resolve => resolve('Deleted' + id)),
                set: (props) => new Promise(resolve => resolve(null))
            }),  
        },
        comments: {
            get: () => new Promise((resolve) => resolve(new MockCommentsQueryElement())),
            doc: (id: string) => ({
                update: (props) => new Promise(resolve => resolve(props)),
                delete: () => new Promise(resolve => resolve('Deleted' + id)),
                set: (props) => new Promise(resolve => resolve(null))
            }),  
        },
        admin: {
            firestore: {
                Timestamp: {
                    fromDate: (date: Date) => null
                }
            }
        }
    }
))

jest.mock('uuid', () => ({v4: () => 1234}))

test ('should add new post', async () => {
    const res = await addPost({method: 'POST'} as NextApiRequest, new TestResponse() as unknown as NextApiResponse)
    //@ts-ignore
    expect(res.value.id).toBe(1234)
})

test ('should not add new post with incorrect method', async () => {
    const res = await addPost({method: 'OTHER'} as NextApiRequest, new TestResponse() as unknown as NextApiResponse)
    //@ts-ignore
    expect(res.status).toBe(500)
})



// jest.mock('../../../config/fb', () => ({
//     ...jest.requireActual('../../../config/fb')
// }))