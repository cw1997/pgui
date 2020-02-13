import {AnyAction} from "redux";
import {Controls} from "./objects/Control";
import IMyElement from "./objects/MyElement";

export
enum Actions {
    setSelectedControl,
    setSelectedElement,
    addElement,
    updateElement,
}

export default
class MyAction {
    static setSelectedControl(control : Controls) : AnyAction {
        return {
            type: Actions.setSelectedControl,
            control,
        }
    }
    static setSelectedElement(element: IMyElement) : AnyAction {
        return {
            type: Actions.setSelectedElement,
            element,
        }
    }
    static addElement(element : IMyElement) : AnyAction {
        return {
            type: Actions.addElement,
            element,
        }
    }
    static updateElement(element : IMyElement) : AnyAction {
        return {
            type: Actions.updateElement,
            element,
        }
    }
}
