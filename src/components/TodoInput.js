import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
    
        const {item, handlChange, handlSubmit, editItem} = this.props

        return (
            <div className="card card-body my-3">
                <form onSubmit = {handlSubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="text" className="form-control" value = {item} onChange ={handlChange} id="exampleInputEmail1"  placeholder="add input todo" />
                    </div>
        <button type="submit" className={editItem ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3' }>{editItem ? 'Edit item' : 'add item' }</button>
                </form>
            </div>
        )
    }
}
