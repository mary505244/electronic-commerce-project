import {SAVE_CATEGORY} from "../action_types";

const category = (prevState = [], action) => {
    const {type, data} = action;

    switch (type) {
        case SAVE_CATEGORY:
            return [...data];
        default:
            return prevState
    }
}

export default category
