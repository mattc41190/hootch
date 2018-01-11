import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        task: PropTypes.string,
        isEditing: PropTypes.bool.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        toggleTask: PropTypes.func.isRequired,
        editTask: PropTypes.func.isRequired,
        cancelTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    };
    static defaultProps = {
        task: ''
    };

    constructor(props) {
        super(props);
        this.toggleTask = this.props.toggleTask.bind(this, this.props.id);
        this.editTask = this.props.editTask.bind(this, this.props.id);
        this.cancelTask = this.props.cancelTask.bind(this);
        this.deleteTask = this.props.deleteTask.bind(this, this.props.id);
    }

    renderActionsSection() {
        if (this.props.isEditing) {
            return (
                <div className="col-xs-4">
                    <button>Save</button>
                    <button onClick={this.cancelTask}>Cancel</button>
                </div>
            );
        }
        return (
            <div className="col-xs-4">
                <button onClick={this.editTask}>Edit</button>
                <button onClick={this.deleteTask}>Delete</button>
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

export default TodosListItem;
