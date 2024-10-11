import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = (e) => {
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
    
        this.props.AddTodo(todo);
        this.setState({
            title: ''
        })
    }


    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title}

                    onChange = { 
                        (event) => {
                        this.handleOnchangeTitle(event)
                    }}>

                </input>
                <button type="button" className="add"
                   onClick = {
                    (e) => {
                        this.handleAddTodo(e)
                    }
                   }
                   >
                    Add</button>
            </div>
        )

    }
}

export default AddTodo;