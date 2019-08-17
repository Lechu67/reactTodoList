import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/about";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Joll',
                completed: false
            },
            {
                id: 2,
                title: 'Eloszka',
                completed: true
            },
            {
                id: 3,
                title: 'Frajer',
                completed: false
            }
        ]
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    };

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    };

    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    };


    render() {
        console.log(this.state.todos);
        return (
            <Router>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <Route exact path='/' render={props => (
                        <Fragment>
                            <AddTodo
                                addTodo={this.addTodo}
                            />
                            <Todos
                                todos={this.state.todos}
                                toggleComplete={this.toggleComplete}
                                deleteTodo={this.deleteTodo}
                            />
                        </Fragment>
                    )}/>
                    <Route path='/about' component={About}/>
                </div>
            </div>
            </Router>
        );
    }
}

export default App;
