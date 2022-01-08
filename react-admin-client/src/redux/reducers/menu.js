import {SAVE_TITLE} from "../action_types";

export default function menu(prevState = '', action) {
    const {type, data} = action;

    switch (type) {
        case SAVE_TITLE:
            return data;
        default:
            return prevState;
    }
}
