import { checkAdminCredentials } from '../admin-auth';

test ('should not get access with wrong password', () => {
    process.env.ADMIN_EMAIL = 'example2@gmail.com'
    process.env.ADMIN_PASSWORD = '1111'
    const res = checkAdminCredentials('example1@gmail.com', '12345678')
    expect(res).toBe(false)
})

test ('should not get access with wrong password', () => {
    process.env.ADMIN_EMAIL = 'example1@gmail.com'
    process.env.ADMIN_PASSWORD = '12345678'
    const res = checkAdminCredentials('example1@gmail.com', '12345678')
    expect(res).toBe(true)
})