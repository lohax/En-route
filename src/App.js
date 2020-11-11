import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Todos from './components/Todos'
import About from './components/About'
import Contact from './components/Contact'
import TodoDetails from './components/TodoDetails'
import './App.css'

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    this.getTodos()
      .then(res => res.json()) // ? ceci est une promesse en reponse de getTodos
      .then(data => {
        this.setState({
          todos: data
        })
      })
  }

  getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos') // ? requete ajax pour recuperer elmenets de l'API
  }

  render() {
    return (
      <div className="App">
        <Router>

          <header className="App-header">
            Le routage
            <Link to='/todos'>A faire</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>A propos</Link>
          </header>

          <Route exact  path="/todos" render={() => ( // utliser render  et fonction lorsqu'un component a besoin de props
            <Todos todos={this.state.todos} />
          )} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/todos/:id" component={TodoDetails}/> 

        </Router>

      </div>
    );
  }
}

export default App;