import Appearance from "./Appearance";
import Behavior from "./Behavior";
import {Controls} from "../Control";

export default
class MyElement {
    id : string;
    type: Controls;
    appearance : Appearance;
    behavior : Behavior;
    constructor(id : string) {
        this.id = id;
    }
}