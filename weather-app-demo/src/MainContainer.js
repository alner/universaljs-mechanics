import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import Main from './Main';

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;