import {SAVE_PRODUCT_LIST} from "../action_types";

const product = (prevState = [], action) => {
    const {type, data} = action;

    switch (type) {
        case SAVE_PRODUCT_LIST:
            return data;
        default:
            return prevState
    }
}

export default product
