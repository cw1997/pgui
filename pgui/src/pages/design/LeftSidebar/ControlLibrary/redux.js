import {setSelectedControl} from "redux/actions";
import ControlLibrary from "pages/design/LeftSidebar/ControlLibrary/index";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        onSelectControl: control => {
            dispatch(setSelectedControl(control))
        }
    }
};

const mapStateToProps = state => {
    return {
        selectedControl: state.selectedControl
    }
};

const ControlLibraryWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlLibrary);

export default ControlLibraryWithRedux;
