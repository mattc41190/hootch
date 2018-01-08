import React from 'react'
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

class TodosList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderItems() {
        return this.props.todos.map((todo, index) => {
            return (
                <TodosListItem key={index} {...todo} toggleTask={this.props.toggleTask.bind(this)} />
            )
        })
    }

    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}

export default TodosList
