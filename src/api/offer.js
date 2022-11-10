import request from "../utils/request.util";

/*********** NONE PROTECTED (PUBLIC) **********/

export const searchOffer = ({key= '', categories= []}) => {
    return new Promise((resolve, reject) => {
        let urlCategories = "";

        for(const c of categories) {
            urlCategories= urlCategories+`${"&category="+c.machine_name}`
        }

        request.get(`/search?key=${key}${urlCategories}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getOffersCategories = () => {
    return new Promise((resolve, reject) => {
        request.get('/offers-categories')
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getOfferById = (id) => {
    return new Promise((resolve, reject) => {
        request.get(`/offer/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getUploadedFile = (filename) => {
    return new Promise((resolve, reject) => {
        request.get('/uploads/'+filename, {responseType: 'blob'})
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}

export const getPublicOfferByUserId = (id) => {
    return new Promise((resolve, reject) => {
        request.get(`/offer/user/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}