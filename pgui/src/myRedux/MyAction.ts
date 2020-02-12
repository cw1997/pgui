import MyElement from "./objects/MyElement";
import {AnyAction} from "redux";
import {Controls} from "./objects/Control";
import IMyElement from "./objects/MyElement";

// export
// interface IAction {
//     action : Actions,
// }

export
enum Actions {
    getSelectedControl,
    setSelectedControl,
    setSelectedElement,
    addElement,
}

export default
class MyAction {
    // static getSelectedControl() : AnyAction {
    //     return {
    //         type: Actions.getSelectedControl
    //     }
    // }
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
    static addElement(element : MyElement) : AnyAction {
        return {
            type: Actions.addElement,
            element,
        }
    }
}
