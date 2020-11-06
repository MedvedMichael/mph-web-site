const IMAGE_API_URL = 'https://api.imgbb.com/1/upload'

const hostImage = async (image: Buffer) => {
    const url = new URL(IMAGE_API_URL)
    url.searchParams.set('key', '17a02503085287a21b0e79583f4c5638')

    const form = new FormData()
    form.append('image', image.toString('base64'))

    return fetch(url.toString(), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: form
    }).then(res => res.json()).then(res => res.data.display_url)
}

export default hostImage
