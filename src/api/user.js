import request from "../utils/request.util";


export const userLogin = (data) => {
    return new Promise((resolve, reject) => {
        request.post('/login', data)
                .then(res => {
                    const token = res.data.token.token;
                    if(token)
                    resolve(token);
                })
                .catch(err => reject(err))
    })
}

export const userRegister = (data) => {
    return new Promise((resolve, reject) => {

        const headers = {
            "Content-Type": "multipart/form-data"
        }

        request.post('/registration', data, {headers})
            .then(res => {
                resolve(res.data)
            })
    })
}