import request from "../utils/request.util";

/*********** NONE PROTECTED (PUBLIC) **********/

export const searchOffer = ({key= '', category= ''}) => {
    return new Promise((resolve, reject) => {
        request.get(`/search?key=${key}&category=${category}`)
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

