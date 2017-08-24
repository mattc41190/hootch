import React from 'react'
import _ from 'lodash'
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

class TodosList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => {
            return (
                <TodosListItem key={index} {...todo} />
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
