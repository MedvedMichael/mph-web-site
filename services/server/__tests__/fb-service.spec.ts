import { title } from 'process'
import { admin, posts, comments } from '../../../config/fb'
import { Post, Comment } from '../../../interfaces/blog-interfaces'
import { addNewPost, deleteCommentsOfPost, deletePost, getAllComments, getAllPosts, patchPost, postComment } from '../fb-service'

interface IDoc extends Partial<Post> {
    postId?: string
    timestamp?: {
        _seconds: number
        _nanoseconds: number
    },
    name?: string;
}

export class MockDocPost {

    _data: IDoc
    id: string

    constructor(id: number) {
        this.id = id.toString()
        this._data = {
            postId: id.toString() + id.toString()
        }
    }

    data() {
        return this._data
    }
}

export class MockDocComment {
    _data: IDoc
    id: string

    constructor(id: number) {
        this.id = id.toString()
        this._data = {
            postId: id.toString() + id.toString(),
            name: 'Name' + id.toString(),
            timestamp: {
                _nanoseconds: 0,
                _seconds: 0
            }
        }
    }

    data() {
        return this._data
    }
}

export class MockPostsQueryElement {
    docs = Array.from({length: 3}, (_, index) => new MockDocPost(index))

    forEach(callback) {
        this.docs.forEach((doc) => callback(doc))
    }
}

export class MockCommentsQueryElement {
    docs = Array.from({length: 3}, (_, index) => new MockDocComment(index))

    forEach(callback) {
        this.docs.forEach((doc) => callback(doc))
    }
}

jest.mock('../../../config/fb', () => (
    {
        posts: {
            get: () => new Promise((resolve) => resolve(new MockPostsQueryElement())),
            doc: (id: string) => ({
                update: (props) => new Promise(resolve => resolve(props)),
                delete: () => new Promise(resolve => resolve('Deleted' + id)),
                set: (props) => new Promise(resolve => resolve())
            }),  
        },
        comments: {
            get: () => new Promise((resolve) => resolve(new MockPostsQueryElement())),
            doc: (id: string) => ({
                update: (props) => new Promise(resolve => resolve(props)),
                delete: () => new Promise(resolve => resolve('Deleted' + id)),
                set: (props) => new Promise(resolve => resolve())
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


test('should give all posts', async () => {
    const res = await getAllPosts()
    expect(res.docs.length).toBe(3)
    // console.log(res.docs[0].id)
    expect(res.docs[0].id === '0').toBe(true)
})

test('should patch correctly', async () => {

    const props = {text: '', title: '', images: []}
    const res = await patchPost('1', props)
    expect(res).toBe(props)
})

test('should delete correctly', async () => {
    const id = '1'
    const res = await deletePost(id)
    expect(res).toBe('Deleted' + id)
})

test('should add new post', async () => {
    const res = await addNewPost()
    expect(res).toBe(1234)
})

test('should add new comments', async () => {
    const res = await postComment({name: '', text: '', postId: '1'})
    expect(res).toBe(1234)
})

test('should give all comments', async () => {
    const res = await getAllComments()
    expect(res.docs.length).toBe(3)
    expect(res.docs[0].id === '0').toBe(true)
})

test ('should delete all comments of post', async () => {
    const res = await deleteCommentsOfPost('11')
    expect(res).toBe(1)
})

test ('should not delete comments of post without comments', async () => {
    const res = await deleteCommentsOfPost('1')
    expect(res).toBe(0)
})

// jest.mock('../../../config/fb', () => ({
//     ...jest.requireActual('../../../config/fb')
// }))

// jest.mock('uuid', () => ({...jest.requireActual('uuid')}))