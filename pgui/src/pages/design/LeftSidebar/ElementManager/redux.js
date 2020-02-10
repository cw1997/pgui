import {setSelectedElement} from "redux/actions";
import {connect} from "react-redux";
import ElementManager from "pages/design/LeftSidebar/ElementManager/index";

const mapDispatchToProps = dispatch => {
    return {
        onSelectElement: control => {
            dispatch(setSelectedElement(control))
        }
    }
};

const mapStateToProps = state => {
    return {
        selectedElement: state.selectedElement,
        elements: state.elements,
    }
};

const ElementManagerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(ElementManager);

export default ElementManagerWithRedux;
