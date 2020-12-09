import { addDefaultPost, addNewComment, getPostById, getAllPosts, patchPost, deletePost } from '../blog-service'

test('should add new post', async () => {
    const id = '1234'
    //@ts-ignore
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ id }),
        })
    );

    const res = await addDefaultPost('secret')
    expect(res).toBe(id)
})

test('should add new comment', async () => {
    //@ts-ignore
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ success: true }),
        })
    );

    const res = await addNewComment({ name: '', text: '', postId: '1' })
    expect(res.success).toBe(true)
})

test('should give post', async () => {
    //@ts-ignore
    global.fetch = jest.fn((path) => {
        return Promise.resolve({
            json: () => Promise.resolve({ post: { data: 'some-post', path } }),
        })
    });

    process.env.API_URL = 'some_url'

    const id = '1'
    const res = await getPostById(id)
    expect(res.path).toBe(`some_url/api/post/` + id)
    expect(res.data).toBe(`some-post`)
})

test('should give all posts', async () => {
    const posts = [1,2,3,4,5]
    //@ts-ignore
    global.fetch = jest.fn((path) => 
        Promise.resolve({
            json: () => Promise.resolve({ path, posts }),
        })
    );


    process.env.API_URL = 'some_url'
    const res = await getAllPosts()
    expect(res.path).toBe(`some_url/api/posts`)
    expect(res.posts).toBe(posts)
})

test('should patch post', async () => {
    //@ts-ignore
    global.fetch = jest.fn((path, options) => 
        Promise.resolve({
            json: () => Promise.resolve({ path, options }),
        })
    );
    const props = {id: '1', text: '', title: '', images: [], secret: 'secret'}
    process.env.API_URL = 'some_url'

    const res = await patchPost(props).then(res => res.json())
    expect(res.path).toBe('some_url/api/post/' + props.id + '?secret=' + props.secret)
    expect(res.options.body).toBe(JSON.stringify({title: props.title, text:  props.text, images:  props.images}))


})

test('should delete post', async () => {
    //@ts-ignore
    global.fetch = jest.fn((path) => 
        Promise.resolve({
            json: () => Promise.resolve({ path }),
        })
    );


    process.env.API_URL = 'some_url'
    const id = '1', secret = 'secret'
    const res = await deletePost(id, secret).then(res => res.json())
    expect(res.path).toBe('some_url/api/post/' + id + '?secret=' + secret)
})