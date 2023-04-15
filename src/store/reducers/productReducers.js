//state global
const initialState = {
    counter: 0,
    data: [],
    isLoading: false,
    isError: false,
}

//reducers to handle trigger from action
const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASECOUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASECOUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'GET_PRODUCT_REQUEST':
            return {
                ...state,
                isLoading: true,
                data: [],
                isError: false
            }
        case 'GET_PRODUCT_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                isError: false
            }
        case 'GET_PRODUCT_ERROR':
            return {
                ...state,
                isLoading: false,
                data: [],
                isError: true
            }

        default:
            return state;
    }
}

export default productReducers