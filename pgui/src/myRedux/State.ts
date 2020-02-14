import {Controls} from "./objects/Control";
import IMyElement from "./objects/MyElement";

export default
class State {
    selectedControl : Controls = Controls.select;
    selectedElement : IMyElement | null;
    elements : IMyElement[] = [];
    controls: Controls[] = [
        Controls.select,
        Controls.button,
        Controls.text,
    ];
    autoIncrementId : number = 0;
}
