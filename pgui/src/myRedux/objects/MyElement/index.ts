import Appearance from "./Appearance";
import Behavior from "./Behavior";
import {Controls} from "../Control";

export default
class IMyElement {
    id : string;
    remark : string = '';
    type : Controls;
    appearance? : Appearance;
    behavior? : Behavior;
}
