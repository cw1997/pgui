import {Controls} from "./objects/Control";
import IMyElement from "./objects/MyElement";

export default
class State {
    selectedControl : Controls;
    selectedElement : IMyElement | null;
    elements : Map<IMyElement['id'], IMyElement>;
    controls: Controls[];
}
