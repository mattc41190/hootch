import React from 'react';
import uuid from 'uuid/v1';
import TodosList from './TodosList';
import CreateTodo from './create-todo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }

    toggleTask(task) {
        const foundTodo = this.state.todos.find(todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            id: uuid(),
            task,
            isCompleted: false
        });

        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <h1>Sample App</h1>
                <CreateTodo createTask={this.createTask} />
                <TodosList todos={this.state.todos} toggleTask={this.toggleTask} />
            </div>
        );
    }
}

export default App;
