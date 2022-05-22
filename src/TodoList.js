import React,{Component} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[
                {task:"walk the fish"},
                {task:"Groom Chickens"}
            ]
        }
        this.create=this.create.bind(this)
    }
    create(newTodo){//adding a new todo to the list
        this.setState({
            todos: [...this.state.todos, newTodo]
          });
    }
    render(){
        const todos=this.state.todos.map(todos=>{//savind all the todos in one variable to display in render function
            return <Todo task={todos.task}/>
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