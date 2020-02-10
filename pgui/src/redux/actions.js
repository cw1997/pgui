export const GET_SELECTED_CONTROL = 'GET_SELECTED_CONTROL';
export const SELECTED_CONTROL = 'SWITCH_CONTROL';
export const SELECTED_ELEMENT = 'SELECTED_ELEMENT';
// export const SCALE = 'SCALE';
export const ADD_ELEMENT = 'ADD_ELEMENT';

export function getSelectedControl() {
    return {
        type: GET_SELECTED_CONTROL
    }
}

export function setSelectedControl(controlName) {
    return {
        type: SELECTED_CONTROL,
        controlName,
    }
}

export function setSelectedElement(elementName) {
    return {
        type: SELECTED_ELEMENT,
        elementName,
    }
}

export function addElement(elementName) {
    return {
        type: SELECTED_ELEMENT,
        elementName,
    }
}
