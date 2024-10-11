import React from 'react';
import './ToDoApp.scss';
import AddTodo from './AddTodo';
import DeleteToDo from './DeleteTodo';

class ListToDo extends React.Component {

    state = {
        ListToDo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Clean house' },
            { id: 'todo3', title: 'make video' }
        ]
    }

    addTodo = (todo) => {
        let currentListToDo =this.state.ListToDo;
        currentListToDo.push(todo)

        this.setState({
            title: ""
        })
       
    }

    DeleteToDo = (todo) => {
        console.log("in ra: ", todo)
    }

    render() {
        let { ListToDo } = this.state;
        return (
            <div className="list-todo-container">
                < AddTodo 
                AddTodo = {this.addTodo}
                />
                <div className="list-todo-content">
                    {ListToDo.length > 0 && ListToDo.map((item, index) => 
                    {return (
                        <div key={item.id} className='todo-child'>
                            <span>{index + 1} - {item.title}</span>
                            <button className='edit'>Edit</button>
                            <button className='delete'
                            onClick={   
                                () => this.DeleteToDo(item)
                            }
                            >Delete</button>
                        </div>
                    )}
                    )}
                </div>
            </div>
        );

    }
}


export default ListToDo;