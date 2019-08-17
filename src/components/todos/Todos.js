import React, { Component } from 'react';
import TotoItem from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {

    render() {
        console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TotoItem
                key={todo.id}
                todo={todo}
                toggleComplete={this.props.toggleComplete}
                deleteTodo={this.props.deleteTodo}
            />
        ));
    }
}

//Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default Todos;
