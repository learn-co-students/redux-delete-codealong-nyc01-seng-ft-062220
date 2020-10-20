import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo id={todo.id} todo={todo} delete={this.props.delete} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mdp = dispatch => {
  return {
    delete: content => dispatch({type: "DELETE_TODO", payload: content})
  }
}

export default connect(mapStateToProps, mdp)(TodosContainer);
