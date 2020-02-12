
export default
class Control {
    Select : Controls;
    Button : Controls;
    Text : Controls;
}

export
enum Controls {
    Select,
    Button,
    Text,
}

export
let controlList : Controls[] = [
    Controls.Select,
    Controls.Button,
    Controls.Text,
];

//
// export default
// class Control {
//     Select : Controls;
//     Button : Controls;
//     Text : Controls;
//     Image : Controls;
//     Switch : Controls;
//     CheckBox : Controls;
//     Radio : Controls;
//     ProgressBar : Controls;
// }
//
// export
// enum Controls {
//     Select,
//     Button,
//     Text,
//     Image,
//     Switch,
//     CheckBox,
//     Radio,
//     ProgressBar,
// }
