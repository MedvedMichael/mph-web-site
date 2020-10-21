import posts from '../config/fb'

export const getPostById = (id: string) => posts.doc(id).get()

export const getAllPosts = async () => {
    const res = await posts.get()
    res.forEach(post => post.data())
    return res
}