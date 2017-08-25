import React from 'react'

class CreateToDo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input placeholder="what should I drink?" ref="createInput"/>
                <button>Create</button>
            </form>
        )
    }

    handleCreate(event) {
        event.preventDefault()
        this.props.createTask(this.refs.createInput.value)
    }
}

export default CreateToDo
