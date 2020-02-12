import Appearance from "./Appearance";
import Behavior from "./Behavior";
import {Controls} from "../Control";

export default
class IMyElement {
    id : string;
    type : Controls;
    appearance? : Appearance;
    behavior? : Behavior;
    constructor(id : string, type : Controls) {
        this.id = id;
        this.type = type;
    }
}
