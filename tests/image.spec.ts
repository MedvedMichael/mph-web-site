import { NextApiResponse } from 'next';
import postImage, { PostImageRequest } from '../pages/api/image'
import { TestResponse } from './post.[id].spec';
import fetch from 'node-fetch'

process.env.IMAGE_HOSTING_KEY = '12345678'

jest.mock('node-fetch', () => jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: { display_url: 'some_url' }}) 
        })
));

test('should not post image with incorrect secret', async () => {
    const req = {
        query: {
            secret: 'not secret'
        },
        body: JSON.stringify({ image: '' }),
        method: 'POST'
    }

    await postImage(req as PostImageRequest, new TestResponse() as unknown as NextApiResponse)
    expect(fetch).toBeCalledTimes(0)
})

test('should not post image with incorrect method', async () => {
    const req = {
        query: {
            secret: 'secret'
        },
        body: JSON.stringify({ image: '' }),
        method: 'OTHER'
    }

    await postImage(req as PostImageRequest, new TestResponse() as unknown as NextApiResponse)
    expect(fetch).toBeCalledTimes(0)
})

test('should post image correctly', async () => {
    const req = {
        query: {
            secret: 'secret'
        },
        body: JSON.stringify({ image: '' }),
        method: 'POST'
    }

    await postImage(req as PostImageRequest, new TestResponse() as unknown as NextApiResponse)
    expect(fetch).toBeCalledTimes(1)
})


// jest.mock('node-fetch', () => jest.requireActual('node-fetch'))

