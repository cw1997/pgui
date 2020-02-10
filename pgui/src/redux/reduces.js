import {ADD_ELEMENT, GET_SELECTED_CONTROL, SELECTED_CONTROL, SELECTED_ELEMENT} from "redux/actions";

const initialState = {
    selectedControl: 'Select',
    selectedElement: null,
    elements: [],
    canvases: [],
};

export default
function pGui(state=initialState, action) {
    switch (action.type) {
        case SELECTED_CONTROL:
            return {...state, selectedControl: action.controlName};
        case SELECTED_ELEMENT:
            return {...state, selectedElement: action.elementName};
        case GET_SELECTED_CONTROL:
            return state;

        case ADD_ELEMENT:
            return {...state, elements: state.elements + action.elementName};
        default:
            return state;
    }
}

