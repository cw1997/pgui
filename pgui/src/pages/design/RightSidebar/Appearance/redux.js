import {connect} from "react-redux";
import Appearance from "pages/design/RightSidebar/Appearance/index";

const mapDispatchToProps = dispatch => {
    return {
        // onSelectControl: control => {
        //     dispatch(setSelectedControl(control))
        // }
    }
};

const mapStateToProps = state => {
    if (state.selectedControl && state.elements[state.selectedControl]) {
        return {
            id: state.elements[state.selectedControl].id,
            text: state.elements[state.selectedControl].text,
            appearance: state.elements[state.selectedControl].appearance,
        }
    } else {
        return {
            id: null,
            text: null,
            appearance: null,
        }
    }

};

const AppearanceWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Appearance);

export default AppearanceWithRedux;
