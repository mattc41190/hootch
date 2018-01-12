import React from 'react';
import PropTypes from 'prop-types';

class TodosListItem extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        task: PropTypes.string,
        isEditing: PropTypes.bool.isRequired,
        // isCompleted: PropTypes.bool.isRequired,
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

    renderTodo() {
        if (this.props.isEditing) {
            return (
                <div className="col-xs-12">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Todo task" value={this.props.task} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-floppy-disk" />
                            </button>
                            <button className="btn btn-default" onClick={this.cancelTask} type="button">
                                <span className="glyphicon glyphicon-remove" />
                            </button>
                        </span>
                    </div>
                </div>
            );
        }
        return (
            <div className="col-xs-12">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Todo task" value={this.props.task} readOnly />
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.editTask} type="button">
                            <span className="glyphicon glyphicon-pencil" />
                        </button>
                        <button className="btn btn-default" onClick={this.deleteTask} type="button">
                            <span className="glyphicon glyphicon-trash" />
                        </button>
                    </span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                {this.renderTodo()}
            </div>
        );
    }
}

export default TodosListItem;
