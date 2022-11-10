import request, { getAuthHeader } from "../utils/request.util";

/************** NONE PROTECTED ***************/

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
            .catch(err => reject(err))
    })
}

export const getUserProfileById = (id) => {
    return new Promise((resolve, reject) => {
        request.get(`/profile/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}


/************** PROTECTED BY BEARER TOKEN  ******************/

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const headers = getAuthHeader();
        request.get('/user/all', {headers})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getCurrentUserData = () => {
    return new Promise((resolve, reject) => {
        const headers = getAuthHeader();
        request.get('/user/me', {headers})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const headers = getAuthHeader();
        request.get(`/user/${id}`, {headers})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const putUserById = ({id, data}) => {
    return new Promise((resolve, reject) => {
        const headers = getAuthHeader();
        request.put(`/user/${id}`, data, {headers})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const deleteUserById = (id) => {
    return new Promise((resolve, reject) => {
        const headers = getAuthHeader();
        request.delete(`/user/${id}`, {headers})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}