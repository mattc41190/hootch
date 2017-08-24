import React from 'react'
import TodosList from './TodosList'

const todos = [
    {
        task: 'learn React',
        isCompleted: false
    },
    {
        task: 'learn Redux',
        isCompleted: false
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos
        }
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default App
