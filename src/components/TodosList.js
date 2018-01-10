import React from 'react';
import PropTypes from 'prop-types';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

class TodosList extends React.Component {
    renderItems() {
        return (
            this.props.todos.map(todo => (
                <TodosListItem
                    key={todo.id}
                    {...todo}
                    toggleTask={this.props.toggleTask}
                />
            ))
        );
    }

    render() {
        return (
            <div className="col-md-4">
                {this.props.todos.length > 0 ? <TodosListHeader /> : null}
                {this.renderItems()}
            </div>
        );
    }
}

TodosList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
    })).isRequired,
    toggleTask: PropTypes.func.isRequired
};

export default TodosList;
