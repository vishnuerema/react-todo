import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {

        const {items, clearItems, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-3">
                <h3 className="text-center text-capitalize">Todo List</h3>
                {items.map(item => {
                   return <TodoItem key ={item.id} handleEdit = {() => handleEdit(item.id)} handleDelete = {() => handleDelete(item.id)} title ={item.title} />
                })}
                <button type="button" onClick = {clearItems} className="btn btn-primary mt-3">Clear item</button>
            </ul>
        )
    }
}
