import {Actions} from "./MyAction";
import {AnyAction} from "redux";
import State from "./State";
import {Controls} from "./objects/Control";

let initialState : State = new State();
initialState = {
    selectedControl: Controls.select,
    selectedElement: null,
    elements: [],
    controls: [
        Controls.select,
        Controls.button,
        Controls.text,
    ],
};

export default
class Reduce {
    static pGui(state=initialState, action: AnyAction) : State {
        switch (action.type) {
            case Actions.setSelectedControl:
                return {...state, selectedControl: action.control};
            case Actions.setSelectedElement:
                return {...state, selectedElement: action.element};

            case Actions.addElement:
                // remember not edit input parameter, this is reduces principles.
                // Quote: We don't mutate the state.
                // We create a copy with Object.assign().
                // Object.assign(state, { visibilityFilter: action.filter }) is also wrong:
                // it will mutate the first argument. You must supply an empty object as the first parameter.
                // You can also enable the object spread operator proposal to write { ...state, ...newState } instead.
                let elements = new Array(...state.elements);
                console.log(elements);
                elements[action.element.id] = action.element;
                return {...state, elements};
            default:
                return state;
        }
    }
}

