import React, { Component } from 'react';

class TodoDetails extends Component {

    state = {
        todo: []
    }

    componentDidMount() {

        this.getTodoDetails()
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todo: data
                })
            })
        
    }

    getTodoDetails() {
        const paramId = this.props.match.params.id // le router ajoute des props utile comme match
        return fetch(`https://jsonplaceholder.typicode.com/todos/${paramId}`)
    }

    render() {
        const todo = this.state.todo
        return (
            <div>
                <div>
                    Détails du todo n° {todo.id}
                </div>
                <br/>
                <div>
                    {todo.title}
                </div>

            </div>
        );
    }
}

export default TodoDetails;






