export function signIn(newUser)  {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ejahljah127hjljah9872kjhsjlahha98928lka',
                username: newUser.username,
                password: newUser.password
            })
        }, 2000)
    })
}