

interface AddCommentProps {
    name: string
    text: string
    postId: string
}

export const addDefaultPost = async (secret: string): Promise<string> => 
    fetch(`${process.env.API_URL}/api/post`, {
        method: 'POST',
        body: JSON.stringify({secret})
    })
    .then(res => res.json())
    .then(res => res.id)


export const addNewComment = async (props: AddCommentProps) =>
    fetch(`${process.env.API_URL}/api/comments`, {
        method: 'POST',
        body: JSON.stringify(props)
    })
    .then(res => res.json())

export const getPostById = async (id: string) => 
    fetch(`${process.env.API_URL}/api/post/` + id)
    .then(res => res.json())
    .then(res => res.post)

export const getAllPosts = async () => 
    fetch(`${process.env.API_URL}/api/posts`)
    .then(res => res.json())

interface PatchPostProps {
        id: string,
        title: string,
        text: string,
        images: string[],
        secret: string
}

export const patchPost = async ({id, text, title, images, secret}: PatchPostProps) => 
    fetch(`${process.env.API_URL}/api/post/${id}?secret=${secret}`, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({ title, text, images})
    })


export const deletePost = async (id: string, secret: string) => fetch(`${process.env.API_URL}/api/post/${id}?secret=${secret}`, {
    method: 'DELETE',
    mode: 'cors'
}) 