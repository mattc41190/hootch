import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.task = this.props.task;
        this.isCompleted = this.props.isCompleted;
        this.toggleTask = this.props.toggleTask.bind(this, this.task);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    renderTaskSection() {
        const taskStyle = {
            color: this.isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <td style={taskStyle}>
                <button onClick={this.toggleTask}>{this.task}</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }
}

TodosListItem.propTypes = {
    task: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired,
    toggleTask: PropTypes.func.isRequired
};

TodosListItem.defaultProps = {
    task: ''
};

export default TodosListItem;
