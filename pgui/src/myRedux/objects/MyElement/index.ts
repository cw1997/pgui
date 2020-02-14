import Appearance from "./Appearance";
import Behavior from "./Behavior";
import {Controls} from "../Control";

export default
class IMyElement {
    id : number;
    name : string;
    remark : string = '';
    type : Controls;
    appearance? : Appearance;
    behavior? : Behavior;
}
