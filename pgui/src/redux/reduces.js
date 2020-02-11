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
            // remember not edit input parameter, this is reduces principles.
            // Quote: We don't mutate the state.
            // We create a copy with Object.assign().
            // Object.assign(state, { visibilityFilter: action.filter }) is also wrong:
            // it will mutate the first argument. You must supply an empty object as the first parameter.
            // You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
            let elements = new Array([...state.elements]);
            console.log(elements);
            elements[action.element.id] = action.element;
            return {...state, elements};
        default:
            return state;
    }
}

