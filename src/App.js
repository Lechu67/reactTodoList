import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/about";
import axios from "axios";

class App extends Component {
    state = {
        todos: []
    };
    constUrl = 'https://jsonplaceholder.typicode.com/todos';

    componentDidMount() {
        axios.get(this.constUrl + '?_limit=10')
            .then(res => this.setState({
                todos: res.data
            }))
    }

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
        axios.delete(this.constUrl + `/${id}`)
            .then(res => this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }))
    };

    addTodo = (title) => {
        const newTodo = {
            title: title,
            completed: false
        };
        axios.post(this.constUrl, newTodo)
            .then(res => this.setState({
                todos: [...this.state.todos, res.data]
            }))
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
