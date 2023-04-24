const conta = {
    email: 'seleguimstudio@gmail.com',
    password: '123456',
    name: 'Allan Seleguim',
    balance: 10.00000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})
