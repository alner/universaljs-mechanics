import { connect } from 'react-redux';
import * as components from './components';
import * as actions from './actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state }
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(actions.addTodo(text)),
            toggleTodo: id => dispatch(actions.toggleTodo(id))
        }
    }
)(components.TodoList);