import React from "react";

import './index.sass'

export default
function PropertyPanel(props : any) {
    if (props) {
        return (
            <div className="PropertyPanel">
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="PropertyPanel">
                Not select anyone element.
            </div>
        )
    }

}


// export
// function BasicProperty(props: any) {
//     return (
//         <div className="BasicProperty">
//             <InputNumber title={'ID'}>{props.id}</InputNumber>
//             <InputNumber title={'remark'}>{props.remark}</InputNumber>
//         </div>
//     )
// }

// function ConfigItem(props : any) {
//     return (
//         <div className="ConfigItem">
//             <div className="config-item-label">
//                 {props.label}
//             </div>
//             <div className="config-item-input">
//                 {props.children}
//             </div>
//         </div>
//     )
// }
