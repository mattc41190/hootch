import React from 'react';
import PropTypes from 'prop-types';

class CreateToDo extends React.Component {
    constructor() {
        super();
        this.handleCreate = this.handleCreate.bind(this);
        this.inputValue = { value: '' };
        this.placeholder = 'What do I need to do?';
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask(this.inputValue.value);
        this.inputValue.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleCreate}>
                <input
                    placeholder={this.placeholder}
                    ref={(input) => { this.inputValue = input; }}
                />
                <button>Create</button>
            </form>
        );
    }
}

CreateToDo.propTypes = {
    createTask: PropTypes.func.isRequired
};

export default CreateToDo;
