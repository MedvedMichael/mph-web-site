import posts from '../config/fb'

export const getPostById = (id: string) => posts.doc(id).get()
