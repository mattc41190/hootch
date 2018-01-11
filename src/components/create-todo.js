import React from 'react';
import PropTypes from 'prop-types';

class CreateToDo extends React.Component {
    static propTypes = {
        createTask: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.handleCreate = this.handleCreate.bind(this);
        this.inputValue = { value: '' };
        this.placeholder = 'What do I need to do?';
    }

    handleCreate(event) {
        event.preventDefault();
        const { value } = this.inputValue;
        if (value.length > 0) {
            this.props.createTask(this.inputValue.value);
            this.inputValue.value = '';
        }
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleCreate}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder={this.placeholder}
                        ref={(input) => { this.inputValue = input; }}
                    />
                    <button type="submit" className="btn btn-default">Create</button>
                </div>
            </form>
        );
    }
}

export default CreateToDo;
