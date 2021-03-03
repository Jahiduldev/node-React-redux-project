import DISHES from "../data/dishes";
// import COMMENTS from "../data/comments";

const initialState = {
    dishes: DISHES,
    // comments: COMMENTS
    sample: "Hellow word"
}

export const Reducer = (state = initialState, action) => {

    if(action.type === "Test"){
        return {
            ...state,
            sample: action.str

        }

    }
    return state;
}