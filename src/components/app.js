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
        isCompleted: true
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
                <h1>Sample App</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        )
    }

    toggleTask(task) {
        const foundTodo = this.state.todos.find(todo => todo.task === task)
        foundTodo.isCompleted = !foundTodo.isCompleted
        this.setState({todos: this.state.todos})
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
