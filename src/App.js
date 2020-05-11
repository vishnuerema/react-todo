import React,{Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid"; 

class App extends Component {
  state = {
    items : [],
    item : '',
    id : uuid(),
    editItem :false
  };
  handlChange = (e) =>{
    this.setState({
      item : e.target.value
    })

  }
  handlSubmit = (e) =>{
    e.preventDefault()
    const newItem = {
      id:this.state.id,
      title:this.state.item,
    }
    console.log(newItem)
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items:updateItem,
      item:'',
      id:uuid(),
      editItem :false
    })
  }
  clearItems = () =>{
    this.setState({
      items : []
    });
  }
  handleDelete = (id) =>{
    const filterItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items : filterItem
    });

  }
  handleEdit = (id) =>{
    const filterItem = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items : filterItem,
      item : selectedItem.title,
      editItem : true,
      id : id
    });

  }
  render() { 
    
      return (
          <div className ="container">
            <div className ="row">
              <div className ="col-md-10 mx-auto">
              <TodoInput item = {this.state.item} editItem = {this.state.editItem} handlChange = {this.handlChange} handlSubmit = {this.handlSubmit} />
              <TodoList items = {this.state.items} handleEdit = {this.handleEdit} handleDelete = {this.handleDelete} clearItems = {this.clearItems} />
              </div>
            </div>
          </div>
      );
  }
}

export default App;
