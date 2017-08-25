import React from 'react'
import TodosList from './TodosList'
import CreateTodo from './create-todo'

const todos = [
    {
        task: 'Sierra Nevada',
        isCompleted: false
    },
    {
        task: 'Dogfish Head',
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
                <h1>To Drink App</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                />
            </div>
        )
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        })

        this.setState({todos: this.state.todos})
    }
}

export default App
