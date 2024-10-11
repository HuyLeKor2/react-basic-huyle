import React from "react";

class DeleteToDo extends React.Component {


    DeleteTodo = (e) => {
  
    }

    render() {
        let { title } = this.state;
        return (
            <button className='delete'
            onClick={(e) => {
                this.DeleteTodo(e)
            }}
            >Delete</button>
        )

    }
}

export default DeleteToDo;