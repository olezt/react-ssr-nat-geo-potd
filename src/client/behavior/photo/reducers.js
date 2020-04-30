import { GET_PHOTOS_OF_THE_MONTH } from "./actions";

export default (state = [], { type, data, monthYear }) => {
    switch(type) {
        case GET_PHOTOS_OF_THE_MONTH:
            return { photosOfTheMonth: data, monthYear  };
        default:
            return state;
    }
}