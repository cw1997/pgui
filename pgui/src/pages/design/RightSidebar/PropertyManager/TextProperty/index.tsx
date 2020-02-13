import React from "react";

// import './index.sass'
import PropertyPanel from "../PropertyPanel";
import BasicProperty from "../BasicProperty";
import Appearance from "../AppearanceProperty";

export default
function TextProperty(props : any) {
    return (
        <div className="TextProperty">
            <PropertyPanel>
                <BasicProperty/>
                <hr/>
                <Appearance/>
                <hr/>
            </PropertyPanel>
        </div>
    )
}
