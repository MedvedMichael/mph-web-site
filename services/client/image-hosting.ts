const hostImage = async (image: Buffer, secret: string) => {

    const res = await fetch(`${process.env.API_URL}/api/image?secret=${secret}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({image: image.toString('base64')})
    }).then(res => res.json())

    return res.display_url
}

export default hostImage
