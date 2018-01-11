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
    }

    toggleTask = (id) => {
        const foundTodo = this.state.todos.find(todo => todo.id === id);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask = (task) => {
        this.state.todos.push({
            id: uuid(),
            task,
            isCompleted: false,
            isEditing: false
        });

        this.setState({ todos: this.state.todos });
    }

    editTask = (id) => {
        const foundTodo = this.state.todos.find(todo => todo.id === id);
        if (foundTodo.isEditing === false) {
            // Cancel previous task under edit
            this.cancelTask();
            // Edit current task
            foundTodo.isEditing = true;
            this.setState({ todos: this.state.todos });
        }
    }

    cancelTask = () => {
        const foundTodo = this.state.todos.find(todo => todo.isEditing === true);
        if (foundTodo) {
            foundTodo.isEditing = false;
        }
        this.setState({ todos: this.state.todos });
    }

    deleteTask = (id) => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: filteredTodos });
    }

    render() {
        return (
            <div>
                <h1>Sample App</h1>
                <CreateTodo createTask={this.createTask} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask}
                    editTask={this.editTask}
                    cancelTask={this.cancelTask}
                    deleteTask={this.deleteTask}
                />
            </div>
        );
    }
}

export default App;
