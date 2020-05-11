import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <li className="d-flex list-group-item justify-content-between text-capitalize">
                 <h6>{title}</h6>
                <div className="todo=-icon">
                    <span onClick = {handleEdit} className="mx-2 text-sucess"><i className="fa fa-pencil"></i></span>
                    <span onClick = {handleDelete} className="mx-2 text-danger"><i className="fa fa-trash"></i></span>
                </div>
            </li>
           
        )
    }
}
