import axios from "axios"
export const increaseCounter = () => (
    {
        type: "INCREASECOUNTER"
    }
)

export const decreaseCounter = () => (
    {
        type: "DECREASECOUNTER"
    }
)

//ACTION USE API

export const getProductRequest = () => (
    {
        type: 'GET_PRODUCT_REQUEST'
    }
)

export const getProductSuccess = (data) => (
    {
        type: 'GET_PRODUCT_SUCCESS',
        payload: data
    }
)

export const getProductError = () => (
    {
        type: 'GET_PRODUCT_ERROR'
    }
)


export const fetchDataProduct = () => {
    return (dispatch) => {
        dispatch(getProductRequest())
        axios.get('https://643a4e09bd3623f1b9b09e50.mockapi.io/products')
            .then((res) => {
                dispatch(getProductSuccess(res))
            })
            .catch(() => {
                dispatch(getProductError())
            })
    }
}