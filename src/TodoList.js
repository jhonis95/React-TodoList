import React,{Component} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
        this.create=this.create.bind(this)
        this.remove=this.remove.bind(this)
    }
    create(newTodo){//adding a new todo to the list
        this.setState({
            todos: [...this.state.todos, newTodo]
          });
    }
    remove(id){
        console.log(this.state.todos)
        this.setState({
            todos:this.state.todos.filter(t=>t.id!==id)//creating a new array without the delete task
        })
    }
    render(){
        const todos=this.state.todos.map(todo=>{//savind all the todos in one variable to display in render function
            return (
                <Todo 
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    removeToDo={this.remove}
                />
            )
        })
        return(
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
export default TodoList;