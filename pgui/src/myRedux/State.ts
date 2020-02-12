import {Controls} from "./objects/Control";

export default
class State {
    selectedControl : Controls;
    selectedElement : string | null;
    elements : Element[];
    // canvases : ;
    controls: Controls[];
}