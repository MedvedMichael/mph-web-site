import hostImage from '../image-hosting'

//@ts-ignore
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ display_url: 'some_url' }),
    })
);
test('should host image', async () => {
    const res = await hostImage(Buffer.from(''), 'secret')
    expect(res).toBe('some_url')
})