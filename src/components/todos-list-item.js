import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };

        this.toggleTask = this.props.toggleTask.bind(this, this.props.task);
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
                <div className="col-xs-4">
                    <button>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </div>
            );
        }
        return (
            <div className="col-xs-4">
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
            </div>
        );
    }

    renderTaskSection() {
        const taskStyle = {
            color: this.props.isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        return (
            <div className="col-xs-8" style={taskStyle}>
                <div onClick={this.toggleTask} role="button" tabIndex="0">
                    {this.props.task}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </div>
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
