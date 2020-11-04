

interface AddCommentProps {
    name: string
    text: string
    postId: string
}

export const addDefaultPost: () => Promise<string> = async () => 
    fetch(`${process.env.API_URL}/api/post`, {
        method: 'POST',
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
        images: string[]
}

export const patchPost = async ({id, text, title, images}: PatchPostProps) => 
    fetch(`${process.env.API_URL}/api/post/` + id, {
        method: 'PATCH',
        mode: 'cors',
        body: JSON.stringify({ title, text, images })
    })
