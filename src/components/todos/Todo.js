import React, { Component } from 'react';
import PropTypes from "prop-types";


class TotoItem extends Component {

    getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    };



    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
                {' '}
                {title}
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
            </div>
        );
    }
}

export default TotoItem;
//Proptypes
TotoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

