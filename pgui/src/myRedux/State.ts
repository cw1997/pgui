import {Controls} from "./objects/Control";
import MyElement from "./objects/MyElement";
import IMyElement from "./objects/MyElement";

export default
class State {
    selectedControl : Controls;
    selectedElement : IMyElement | null;
    elements : MyElement[];
    // canvases : ;
    controls: Controls[];
}